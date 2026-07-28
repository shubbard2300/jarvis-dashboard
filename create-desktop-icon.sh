#!/bin/bash
# Creates a macOS .app on the Desktop that opens Hailie Dashboard in Obsidian.
# Run this once from inside your vault copy:  bash create-desktop-icon.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DASHBOARD_FILE="$SCRIPT_DIR/Hailie Dashboard.md"
APP_NAME="Hailie Dashboard"
DESKTOP="$HOME/Desktop"
APP_PATH="$DESKTOP/$APP_NAME.app"

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}╔══════════════════════════════════════╗${NC}"
echo -e "${CYAN}║   Hailie — Desktop Icon Setup        ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════╝${NC}"
echo ""

# Verify the dashboard file exists
if [ ! -f "$DASHBOARD_FILE" ]; then
  echo -e "${RED}✗ Could not find 'Hailie Dashboard.md' in: $SCRIPT_DIR${NC}"
  echo "  Run this script from inside your vault copy of the dashboard folder."
  exit 1
fi

# Encode the absolute file path for the obsidian:// URI
ENCODED_PATH=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$DASHBOARD_FILE'))")
OBSIDIAN_URL="obsidian://open?path=$ENCODED_PATH"

echo -e "  Dashboard: $DASHBOARD_FILE"
echo -e "  URL:       $OBSIDIAN_URL"
echo ""

# Build AppleScript source
TMP_SCRIPT=$(mktemp /tmp/hailie-icon-XXXXXX.applescript)
cat > "$TMP_SCRIPT" << APPLESCRIPT
do shell script "open '$OBSIDIAN_URL'"
APPLESCRIPT

# Compile into .app
echo -e "  Compiling .app..."
osacompile -o "$APP_PATH" "$TMP_SCRIPT"
rm -f "$TMP_SCRIPT"

# Swap in Obsidian's own icon so it looks native
OBSIDIAN_ICON="/Applications/Obsidian.app/Contents/Resources/obsidian.icns"
if [ -f "$OBSIDIAN_ICON" ]; then
  cp "$OBSIDIAN_ICON" "$APP_PATH/Contents/Resources/droplet.icns"
  # Force Finder to refresh the icon cache
  touch "$APP_PATH"
fi

echo -e "${GREEN}✓ '$APP_NAME.app' created on your Desktop${NC}"
echo ""
echo -e "  Double-click it to open Hailie Dashboard in Obsidian."
echo -e "  You can also drag it to your Dock for one-click access."
echo ""
