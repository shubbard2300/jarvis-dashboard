// Hailie Companion — ElevenLabs TTS Engine
// Streams PCM audio from the ElevenLabs API, converting Int16 → Float32 to
// match the audio format expected by the rest of the pipeline.

const https = require("https");
const BaseTTSEngine = require("./base-engine");

const SAMPLE_RATE = 22050;

class ElevenLabsEngine extends BaseTTSEngine {
  constructor(config) {
    super();
    this._apiKey = config.apiKey || process.env.ELEVENLABS_API_KEY || "";
    this._voiceId = config.voiceId || "21m00Tcm4TlvDq8ikWAM"; // Rachel
    this._modelId = config.modelId || "eleven_turbo_v2_5";
    this._stability = config.stability ?? 0.5;
    this._similarityBoost = config.similarityBoost ?? 0.75;
    this._style = config.style ?? 0;
    this._speakerBoost = config.speakerBoost !== false;
    this._activeReq = null;
  }

  speak(text, lang, epoch) {
    if (!this._apiKey) {
      console.error("[ElevenLabs] No API key — set elevenlabs.apiKey in config or ELEVENLABS_API_KEY env var");
      if (this._onComplete) this._onComplete({ success: false });
      return;
    }

    const body = JSON.stringify({
      text,
      model_id: this._modelId,
      voice_settings: {
        stability: this._stability,
        similarity_boost: this._similarityBoost,
        style: this._style,
        use_speaker_boost: this._speakerBoost,
      },
    });

    const options = {
      hostname: "api.elevenlabs.io",
      path: `/v1/text-to-speech/${this._voiceId}/stream?output_format=pcm_${SAMPLE_RATE}&optimize_streaming_latency=3`,
      method: "POST",
      headers: {
        "xi-api-key": this._apiKey,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    let overflow = null;

    const req = https.request(options, (res) => {
      if (this._epoch !== epoch) return;

      if (res.statusCode !== 200) {
        let errBody = "";
        res.on("data", (c) => { errBody += c; });
        res.on("end", () => {
          console.error(`[ElevenLabs] API error ${res.statusCode}: ${errBody}`);
          if (this._epoch !== epoch) return;
          if (this._onComplete) this._onComplete({ success: false });
        });
        return;
      }

      res.on("data", (chunk) => {
        if (this._epoch !== epoch) return;

        const buf = overflow ? Buffer.concat([overflow, chunk]) : chunk;
        overflow = null;

        const aligned = buf.length % 2 === 0 ? buf : buf.subarray(0, buf.length - 1);
        if (buf.length % 2 !== 0) overflow = buf.subarray(buf.length - 1);
        if (aligned.length === 0) return;

        const pcm16 = new Int16Array(aligned.buffer, aligned.byteOffset, aligned.length / 2);
        const float32 = new Float32Array(pcm16.length);
        for (let i = 0; i < pcm16.length; i++) float32[i] = pcm16[i] / 32768;

        if (this._onAudioChunk) {
          this._onAudioChunk(Buffer.from(float32.buffer).toString("base64"), SAMPLE_RATE);
        }
      });

      res.on("end", () => {
        if (this._epoch !== epoch) return;
        if (this._onComplete) this._onComplete({ success: true });
      });

      res.on("error", () => {
        if (this._epoch !== epoch) return;
        if (this._onComplete) this._onComplete({ success: false });
      });
    });

    req.on("error", (err) => {
      console.error("[ElevenLabs] Request error:", err.message);
      if (this._epoch !== epoch) return;
      if (this._onComplete) this._onComplete({ success: false });
    });

    this._activeReq = req;
    req.write(body);
    req.end();
  }

  stop() {
    this._epoch++;
    if (this._activeReq) {
      try { this._activeReq.destroy(); } catch {}
      this._activeReq = null;
    }
  }
}

module.exports = ElevenLabsEngine;
