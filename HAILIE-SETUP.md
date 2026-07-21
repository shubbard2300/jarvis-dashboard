# Hailie — Setup & Recovery Guide

Hailie is this fork's identity for the Jarvis Dashboard assistant: same dashboard,
same widgets, same Claude integration — only the **name** and the **voice** differ.

## Why the rename disappeared last time

The config loads in three layers, each overriding the one before:

1. `src/config/config.example.json` — tracked in git (the defaults)
2. `src/config/config.json` — **your** personal config, gitignored
3. `src/config/config.local.json` — machine secrets (host/token), gitignored

The original JARVIS → Hailie rename was made only in layer 2 (`config.json`) inside
the Obsidian vault. Because that file is gitignored, it never reached GitHub — so
re-copying the dashboard folder, restoring the vault, or recreating `config.json`
from the example silently reverted the name to JARVIS.

This branch fixes that permanently:

- `config.example.json` now ships with `assistantName: "Hailie"`, the
  `H.A.I.L.I.E.` header, `HAILIE OUTPUT` terminal title, and a female voice.
- The UI code (arc reactor, interaction cards, terminal panel) no longer hardcodes
  "JARVIS" — every label derives from `personality.assistantName`, so the name in
  your config is the single source of truth (the arc-reactor core letter even
  becomes "H").

## Fresh install (Obsidian)

1. Copy this whole repo folder into your Obsidian vault (any location works).
2. Create your personal config:
   ```bash
   cd <vault>/jarvis-dashboard
   cp src/config/config.example.json src/config/config.json
   ```
3. In `config.json`, set `projects.mode`/`tracked` for the Claude projects you want
   monitored (or `"mode": "auto"`).
4. In Obsidian: enable the **Dataview** community plugin and turn on
   **"Enable JavaScript queries"** in its settings.
5. Open **`Jarvis Dashboard.md`**. The header should read **H.A.I.L.I.E.** and the
   arc reactor should say **"Tap to speak to Hailie"**.

## Already installed? (recovering an existing vault copy)

1. Pull this branch into the dashboard folder inside your vault (or re-copy the
   repo over it — `config.json` and `config.local.json` are untouched by git).
2. Open your existing `src/config/config.json` and check the `personality` block.
   If it still says `"assistantName": "JARVIS"`, that value **overrides** the new
   default — change it to `"Hailie"` or simply delete the `assistantName` line so
   the example default flows through.
3. While you're there, update the voice (next section) and, if you have a
   `terminal.title` override, set it to `"HAILIE OUTPUT"`.
4. In Obsidian, reload the dashboard note (close and reopen, or restart Obsidian —
   the note caches its DOM between renders).

## The voice

A true Scarlett Johansson voice isn't something the free local TTS stack can (or
should) reproduce — cloning a real person's voice needs their consent. The config
instead defaults to the closest freely available neural voice: a warm, soft,
low-register American female, slowed slightly for that relaxed "Her"-style delivery.

### Piper (recommended engine, already the default)

Install Piper if you haven't:

```bash
pipx install piper-tts        # or: pip3 install piper-tts
pipx inject piper-tts pathvalidate   # avoids a known ModuleNotFoundError
```

Download the default Hailie voice (**Kristin** — warm, soft, slightly husky):

```bash
mkdir -p ~/.config/piper && cd ~/.config/piper
curl -L -O "https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/kristin/medium/en_US-kristin-medium.onnx"
curl -L -O "https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/kristin/medium/en_US-kristin-medium.onnx.json"
```

Alternatives worth auditioning (download the same way, then point
`tts.piper.modelPath` at the one you prefer):

| Voice | Character |
|---|---|
| `en_US/kristin/medium` | Warm, soft, breathy — closest overall (default) |
| `en_US/amy/medium` | Brighter, younger |
| `en_US/hfc_female/medium` | Crisp, broadcast-clear |
| `en_US/lessac/medium` | Mature, articulate |

Quick A/B test from the terminal:

```bash
echo "Good evening. All systems are online." | piper --model ~/.config/piper/en_US-kristin-medium.onnx --output_file /tmp/hailie.wav && afplay /tmp/hailie.wav
```

Tuning (in `config.json`):

- `language.supported.en.piper.lengthScale` — pace. `0.85` (new default) is
  relaxed; lower = faster, `1.0` = the model's natural, slowest pace.
- `tts.piper.noiseScale` — expressiveness/breathiness. Default `0.4`; try up to
  `0.6` for a softer, airier read.

### macOS Say (fallback engine)

The `say` engine now defaults to **Samantha**. For a noticeably better built-in
voice, download a premium one: **System Settings → Accessibility → Spoken
Content → System Voice → Manage Voices…**, install **Ava (Premium)** or
**Zoe (Premium)**, then set `tts.say.voice` accordingly.

### Mobile

Mobile TTS is synthesized by the companion server using the same Piper config —
no separate setup beyond the server itself (`companion/setup.sh`, see
`docs/server/README.md`).

## Verify everything is working

Work through this list after setup:

- [ ] **Dashboard renders** — `Jarvis Dashboard.md` shows the full widget layout,
      header reads **H.A.I.L.I.E.**
- [ ] **Name** — arc reactor core shows **"H"**, status says
      *"Tap to speak to Hailie"*, terminal panel titled **HAILIE OUTPUT**
- [ ] **Claude CLI** — `claude --version` works in a terminal; if the dashboard
      reports "claude CLI not found", set `terminal.claudePath` in `config.json`
- [ ] **Live Sessions** — start any Claude Code session; it appears in the widget
      within a few seconds
- [ ] **Voice out** — trigger any spoken response; you hear the Kristin voice
      (not a male voice — if male, `config.json` still points at the old
      `en_US-joe-medium` model)
- [ ] **Voice in** — tap the arc reactor, speak, and watch the transcription
      preview appear (needs `whisper-cpp`: `brew install whisper-cpp`)
- [ ] **She stays Hailie** — restart Obsidian and reopen the note; the name must
      survive the reload. If it reverts, something is overriding
      `personality.assistantName` in `config.json` / `config.local.json`.

## Troubleshooting

| Symptom | Fix |
|---|---|
| Still says JARVIS | Your vault's `config.json` overrides the default — edit its `personality.assistantName` to `"Hailie"` (or delete the line) |
| Dashboard doesn't render | Dataview plugin installed + "Enable JavaScript queries" on |
| No sound | `which piper`; set `tts.piper.binaryPath` to the absolute path it prints |
| Male voice | `tts.piper.modelPath` still points at `en_US-joe-medium.onnx` |
| `pathvalidate` error | `pipx inject piper-tts pathvalidate` |
| Voice too fast | Raise `language.supported.en.piper.lengthScale` toward `1.0` |
| Mobile can't connect | Companion server setup: `cd companion && bash setup.sh && npm start` (see `docs/server/README.md`) |
