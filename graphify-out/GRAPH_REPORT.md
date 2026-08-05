# Graph Report - .  (2026-08-05)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1061 nodes · 1256 edges · 118 communities (102 shown, 16 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 111 edges (avg confidence: 0.52)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ab4e2747`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ClaudeRunner
- properties
- tts-manager.js
- voice-command/index.js
- definitions
- macos-bootstrap.js
- network-client.js
- tts-service.js
- session-manager-core.js
- mobile.js
- tauri.conf.json
- wkwebview-adapter.js
- handlers.js
- session-worker.js
- definitions
- focus-timer/index.js
- process_commands.rs
- session-parser.js
- ConnectionStatus
- macos/package.json
- Auth
- SettingsStore
- WebViewBridge
- permissions
- fs_commands.rs
- companion/package.json
- WebViewContainer
- properties
- markdown-renderer.js
- server-factory.js
- permissions
- .webView
- live-sessions/index.js
- config.js
- SettingsView
- Capability
- webviews
- activity-analytics/index.js
- CapabilityRemote
- vault_commands.rs
- helpers.js
- header/index.js
- quick-capture/index.js
- .body
- Transcriber
- create_menu
- connection-handler.js
- MessageRouter
- apply-config.js
- session-manager.js
- system-diagnostics/index.js
- JarvisApp
- ConnectionHandler
- timer-service.js
- recent-activity/index.js
- .urlSession
- setup-symlinks.js
- stats-engine.js
- agent-cards/index.js
- communication-link/index.js
- mission-control/index.js
- quick-launch/index.js
- description
- os_commands.rs
- theme.js
- agent-card.js
- setup.sh
- apply-config.sh
- ios-bootstrap.js
- ShellScopeEntryAllowedArg
- Value
- model-breakdown-panel.js
- arc-reactor.js
- state-machine.js
- setup-symlinks.sh
- buffer.js
- path.js
- styles.js
- footer/index.js

## God Nodes (most connected - your core abstractions)
1. `ClaudeRunner` - 15 edges
2. `SettingsStore` - 15 edges
3. `ConnectionStatus` - 14 edges
4. `Auth` - 13 edges
5. `WebViewBridge` - 12 edges
6. `WebViewContainer` - 10 edges
7. `definitions` - 10 edges
8. `definitions` - 10 edges
9. `setUIState()` - 10 edges
10. `TTSManager` - 9 edges

## Surprising Connections (you probably didn't know these)
- `.body` --calls--> `DashboardView`  [INFERRED]
  ios/JarvisApp/App/JarvisApp.swift → ios/JarvisApp/Views/DashboardView.swift
- `JarvisApp` --calls--> `SettingsStore`  [INFERRED]
  ios/JarvisApp/App/JarvisApp.swift → ios/JarvisApp/Services/KeychainService.swift
- `.body` --calls--> `SettingsView`  [INFERRED]
  ios/JarvisApp/Views/DashboardView.swift → ios/JarvisApp/Views/SettingsView.swift
- `WebViewBridge` --references--> `SettingsStore`  [EXTRACTED]
  ios/JarvisApp/Bridge/WebViewBridge.swift → ios/JarvisApp/Services/KeychainService.swift
- `WebViewBridge` --references--> `ConnectionStatus`  [EXTRACTED]
  ios/JarvisApp/Bridge/WebViewBridge.swift → ios/JarvisApp/Views/DashboardView.swift

## Import Cycles
- None detected.

## Communities (118 total, 16 thin omitted)

### Community 0 - "ClaudeRunner"
Cohesion: 0.08
Nodes (17): ClaudeRunner, { expandPath, stripAnsi }, fs, os, path, { spawn }, BaseTTSEngine, crypto (+9 more)

### Community 1 - "properties"
Cohesion: 0.06
Nodes (37): properties, default, description, type, description, type, $ref, type (+29 more)

### Community 2 - "tts-manager.js"
Cohesion: 0.07
Nodes (14): extractSentences(), stripMarkdown(), BaseTTSEngine, BaseTTSEngine, SayEngine, { spawn }, PiperEngine, SayEngine (+6 more)

### Community 3 - "voice-command/index.js"
Cohesion: 0.10
Nodes (32): arcReactor, attachDelegates(), attachProcessHandlers(), beginRecording(), cancelStreaming(), cards, cleanupId, closeSession() (+24 more)

### Community 4 - "definitions"
Cohesion: 0.06
Nodes (34): anyOf, description, properties, required, type, definitions, CapabilityRemote, Identifier (+26 more)

### Community 5 - "macos-bootstrap.js"
Cohesion: 0.07
Nodes (8): cacheBinaryPaths(), cacheDir(), cacheFile(), cacheFileStat(), cacheVaultRecentFiles(), getConfigValue(), readdirSync(), refreshSessionCache()

### Community 6 - "network-client.js"
Cohesion: 0.10
Nodes (24): cleanup(), clearReconnectTimer(), connect(), disconnect(), handlers, mergedConfig, scheduleReconnect(), send() (+16 more)

### Community 7 - "tts-service.js"
Cohesion: 0.09
Nodes (16): buildPiperArgs(), cleanup(), configuredModelPath, createPiperEngine(), discoveredModels, discoverPiperModels(), expandPath(), getPiperEngineForLang() (+8 more)

### Community 8 - "session-manager-core.js"
Cohesion: 0.13
Nodes (21): cleanup(), createSession(), createSessionData(), generateId(), generateSessionColor(), getActiveSession(), getProjectColor(), getProjectIcon() (+13 more)

### Community 9 - "mobile.js"
Cohesion: 0.12
Nodes (24): arcReactor, beginRecording(), cards, cleanupId, closeSession(), conversationHistory, createNewSession(), finishRecording() (+16 more)

### Community 10 - "tauri.conf.json"
Cohesion: 0.08
Nodes (25): app, macOSPrivateApi, security, windows, withGlobalTauri, build, beforeDevCommand, devUrl (+17 more)

### Community 11 - "wkwebview-adapter.js"
Cohesion: 0.09
Nodes (3): bridgeCall(), getServerConfig(), reject()

### Community 12 - "handlers.js"
Cohesion: 0.09
Nodes (8): AudioSession, crypto, fs, os, path, { spawn }, { AudioSession }, protocol

### Community 14 - "session-worker.js"
Cohesion: 0.14
Nodes (16): agentCache, aggregateStats(), computeStats(), { execSync }, expandHome(), fs, getModelFamily(), getSubagentsForSession() (+8 more)

### Community 15 - "definitions"
Cohesion: 0.11
Nodes (17): anyOf, definitions, Number, PermissionEntry, ShellScopeEntryAllowedArgs, Target, description, anyOf (+9 more)

### Community 16 - "focus-timer/index.js"
Cohesion: 0.13
Nodes (16): circularDisplay, controls, { createCircularDisplay }, { createControlButtons }, { createPresetRow }, { createTimerState }, handleComplete(), handleReset() (+8 more)

### Community 17 - "process_commands.rs"
Cohesion: 0.27
Nodes (16): emit_close(), exec_sync(), kill_process(), open_app(), open_url(), AppHandle, HashMap, Result (+8 more)

### Community 18 - "session-parser.js"
Cohesion: 0.20
Nodes (13): agentCache, _cachedSessions, expandHome(), getAllSessions(), getSubagentDescriptions(), getSubagentsForSession(), getTrackedProjects(), isClaudeProcessRunning() (+5 more)

### Community 19 - "ConnectionStatus"
Cohesion: 0.19
Nodes (13): Color, ConnectionBadge, .body, .statusColor, ConnectionStatus, connected, connecting, disconnected (+5 more)

### Community 20 - "macos/package.json"
Cohesion: 0.12
Nodes (15): dependencies, @tauri-apps/api, description, devDependencies, @tauri-apps/cli, name, private, scripts (+7 more)

### Community 22 - "SettingsStore"
Cohesion: 0.18
Nodes (10): Foundation, KeychainService, SettingsStore, .host, .port, .token, .ttsMode, String (+2 more)

### Community 23 - "WebViewBridge"
Cohesion: 0.18
Nodes (10): Any, Int, Binding, Bool, String, WKWebView, WebViewBridge, WKScriptMessage (+2 more)

### Community 24 - "permissions"
Cohesion: 0.14
Nodes (13): description, identifier, permissions, $schema, windows, core:default, core:event:default, core:webview:default (+5 more)

### Community 25 - "fs_commands.rs"
Cohesion: 0.33
Nodes (13): batch_read_files(), exists(), FileStat, mkdir(), read_file(), readdir(), HashMap, Result (+5 more)

### Community 26 - "companion/package.json"
Cohesion: 0.15
Nodes (12): dependencies, ws, description, main, name, private, scripts, dev (+4 more)

### Community 27 - "WebViewContainer"
Cohesion: 0.21
Nodes (9): Context, Coordinator, Binding, Bool, WKWebView, WebViewContainer, UIViewRepresentable, WKNavigationDelegate (+1 more)

### Community 28 - "properties"
Cohesion: 0.15
Nodes (13): properties, Identifier, description, oneOf, type, default, description, type (+5 more)

### Community 29 - "markdown-renderer.js"
Cohesion: 0.23
Nodes (10): buildCodeBlock(), buildHighlightedCode(), buildInlineCode(), buildPlainTextNode(), buildTokenSpan(), C, jsRules, LANGS (+2 more)

### Community 30 - "server-factory.js"
Cohesion: 0.17
Nodes (11): Auth, ConnectionHandler, handlers, http, https, MessageRouter, os, protocol (+3 more)

### Community 31 - "permissions"
Cohesion: 0.17
Nodes (12): $ref, array, null, description, items, type, uniqueItems, description (+4 more)

### Community 32 - ".webView"
Cohesion: 0.18
Nodes (10): Error, URLAuthenticationChallenge, URLCredential, URLSession, Void, WKFrameInfo, WKMediaCaptureType, WKNavigation (+2 more)

### Community 33 - "live-sessions/index.js"
Cohesion: 0.18
Nodes (8): { createSessionDiffer }, { createSessionRowBuilder }, { createStatusPanel }, differ, liveId, rowBuilder, section, statusPanel

### Community 34 - "config.js"
Cohesion: 0.24
Nodes (8): { deepMerge }, fs, loadConfig(), path, createServer(), deepMerge(), { createServer }, { loadConfig }

### Community 35 - "SettingsView"
Cohesion: 0.23
Nodes (9): SelfSignedSessionDelegate, SettingsView, .body, Bool, String, TestResult, NSObject, SwiftUI (+1 more)

### Community 36 - "Capability"
Cohesion: 0.22
Nodes (10): description, required, type, Capability, description, required, type, Capability (+2 more)

### Community 37 - "webviews"
Cohesion: 0.20
Nodes (10): type, webviews, windows, items, description, items, type, description (+2 more)

### Community 38 - "activity-analytics/index.js"
Cohesion: 0.20
Nodes (8): { createHeatmapPanel }, { createModelBreakdownPanel }, { createPeakHoursPanel }, grid, heatmap, modelBreakdown, peakHours, section

### Community 39 - "CapabilityRemote"
Cohesion: 0.22
Nodes (9): description, properties, required, type, CapabilityRemote, urls, urls, description (+1 more)

### Community 40 - "vault_commands.rs"
Cohesion: 0.42
Nodes (8): count_files(), get_recent_files(), parse_yaml_frontmatter(), RecentFile, Result, String, Vec, Value

### Community 42 - "header/index.js"
Cohesion: 0.22
Nodes (7): clock, { createClock }, { createStatusLine }, { createTitleDisplay }, section, statusLine, titleDisplay

### Community 43 - "quick-capture/index.js"
Cohesion: 0.22
Nodes (7): btn, buttonRow, captureInput, { createCaptureInput }, { createMicButton }, section, titleRow

### Community 44 - ".body"
Cohesion: 0.25
Nodes (5): AVFoundation, AudioBridge, Bool, Void, .body

### Community 45 - "Transcriber"
Cohesion: 0.25
Nodes (3): fs, { spawn }, Transcriber

### Community 46 - "create_menu"
Cohesion: 0.29
Nodes (7): create_menu(), handle_menu_event(), AppHandle, Result, Menu, MenuEvent, Wry

### Community 47 - "connection-handler.js"
Cohesion: 0.29
Nodes (5): ClaudeRunner, protocol, TTSManager, WebSocket, protocol

### Community 49 - "apply-config.js"
Cohesion: 0.29
Nodes (6): configExamplePath, configPath, fs, path, repoRoot, tauriConf

### Community 50 - "session-manager.js"
Cohesion: 0.33
Nodes (6): getProjectPath(), homedir, manager, migrateFromLegacy(), os, SESSIONS_PATH

### Community 51 - "system-diagnostics/index.js"
Cohesion: 0.29
Nodes (5): cardDefs, cards, { createStatCard }, grid, section

### Community 52 - "JarvisApp"
Cohesion: 0.33
Nodes (5): App, JarvisApp, .body, Notification.Name, Scene

### Community 54 - "timer-service.js"
Cohesion: 0.47
Nodes (3): getTimerCachePath(), readTimerState(), writeTimerState()

### Community 55 - "recent-activity/index.js"
Cohesion: 0.33
Nodes (4): { createActivityRow }, excludePatterns, panel, section

### Community 56 - ".urlSession"
Cohesion: 0.40
Nodes (4): URLAuthenticationChallenge, URLCredential, URLSession, Void

### Community 57 - "setup-symlinks.js"
Cohesion: 0.40
Nodes (4): fs, links, path, webDir

### Community 58 - "stats-engine.js"
Cohesion: 0.70
Nodes (4): aggregateStats(), computeStats(), getStatsDir(), parseFullSession()

### Community 59 - "agent-cards/index.js"
Cohesion: 0.40
Nodes (3): { createAgentCard }, grid, section

### Community 60 - "communication-link/index.js"
Cohesion: 0.40
Nodes (3): { createTerminalDisplay }, section, terminal

### Community 61 - "mission-control/index.js"
Cohesion: 0.40
Nodes (3): { createNavButton }, grid, section

### Community 62 - "quick-launch/index.js"
Cohesion: 0.40
Nodes (3): { createBookmarkCard }, groupRefs, section

### Community 64 - "description"
Cohesion: 0.50
Nodes (4): default, description, type, description

### Community 65 - "os_commands.rs"
Cohesion: 0.67
Nodes (3): home_dir(), String, tmp_dir()

### Community 66 - "theme.js"
Cohesion: 0.50
Nodes (3): defaults, leafEl, T

### Community 71 - "ShellScopeEntryAllowedArg"
Cohesion: 0.67
Nodes (3): ShellScopeEntryAllowedArg, anyOf, description

### Community 72 - "Value"
Cohesion: 0.67
Nodes (3): Value, anyOf, description

## Knowledge Gaps
- **341 isolated node(s):** `fs`, `os`, `path`, `{ spawn }`, `crypto` (+336 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Capability` connect `Capability` to `properties`, `definitions`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `Capability` connect `Capability` to `properties`, `definitions`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `properties` connect `properties` to `description`, `Capability`, `webviews`, `permissions`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `fs`, `os`, `path` to the rest of the system?**
  _341 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ClaudeRunner` be split into smaller, more focused modules?**
  _Cohesion score 0.07557354925775979 - nodes in this community are weakly interconnected._
- **Should `properties` be split into smaller, more focused modules?**
  _Cohesion score 0.057057057057057055 - nodes in this community are weakly interconnected._
- **Should `tts-manager.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._