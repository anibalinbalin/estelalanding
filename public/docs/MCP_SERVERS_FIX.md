# MCP Servers Fix Documentation

## Problem Identified
All three MCP servers (context7, puppeteer, serena) are failing with `ENOENT` errors because:
1. The Claude CLI spawns processes without the full user PATH
2. `npx` and `uv` commands are not found in the limited environment

## System Analysis
- Node.js: v22.12.0 (via NVM)
- Package managers: npm, pnpm, yarn installed
- Python: Homebrew Python3
- UV: Installed at `/Users/anibalin/.local/bin/uv`

## Solution Implementation

### Step 1: Create wrapper scripts with full paths
We'll create wrapper scripts that include the full paths to the executables.

### Step 2: Configure Claude CLI
Update the MCP server commands to use absolute paths or wrapper scripts.

### Step 3: Test each server
Verify each server can start successfully.

## Current System State
- Multiple Node installations detected (NVM with v20.9.0 and v22.12.0)
- Path includes duplicate entries (cleanup recommended)
- All required tools are installed but not accessible to Claude CLI

## Next Steps
1. Create wrapper scripts for each MCP server ✅
2. Test manual execution of each server ✅
3. Update Claude CLI configuration ✅
4. Verify servers work within Claude

## Implementation Complete

### Wrapper Scripts Created
- `/Users/anibalin/.claude/mcp-wrappers/context7-wrapper.sh`
- `/Users/anibalin/.claude/mcp-wrappers/puppeteer-wrapper.sh`
- `/Users/anibalin/.claude/mcp-wrappers/serena-wrapper.sh`

### MCP Servers Reconfigured
All servers now use wrapper scripts with full paths:
- context7: Uses npx from NVM Node.js v22.12.0
- puppeteer: Uses npx from NVM Node.js v22.12.0
- serena: Uses uv from ~/.local/bin

### Testing
To verify the servers work, start a new Claude session and check the /mcp command.
The servers should now show as "running" instead of "failed".

## Puppeteer Server Fix Update (July 10, 2025)

### Issue
The puppeteer server was failing because:
1. The configuration was missing from claude_desktop_config.json
2. The wrapper script was using an incorrect package name

### Solution
1. Added puppeteer and serena configurations back to claude_desktop_config.json
2. Updated puppeteer wrapper to use the official package: `@modelcontextprotocol/server-puppeteer`
3. All three servers now properly configured with wrapper scripts

### Current Configuration
All MCP servers use wrapper scripts at `/Users/anibalin/.claude/mcp-wrappers/`:
- context7: Uses `@upstash/context7-mcp`
- puppeteer: Uses `@modelcontextprotocol/server-puppeteer` 
- serena: Uses `uv run serena`

To apply changes, restart Claude Desktop.