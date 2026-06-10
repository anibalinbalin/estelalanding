#!/bin/bash
# PNG to ASCII React Component Generator
# Usage: ./scripts/png-to-ascii.sh <input.png> [width] [output-dir]

set -e

INPUT="$1"
WIDTH="${2:-40}"
OUTPUT_DIR="${3:-components/ascii-logos}"
BRAILLE="${4:-false}"

if [ -z "$INPUT" ]; then
  echo "Usage: $0 <input.png> [width] [output-dir] [braille]"
  echo "  width: character width (default: 40)"
  echo "  output-dir: where to save components (default: components/ascii-logos)"
  echo "  braille: true/false for braille mode (default: false)"
  exit 1
fi

# Check if ascii-image-converter is installed
if ! command -v ascii-image-converter &> /dev/null; then
  echo "Error: ascii-image-converter not installed"
  echo "Run: brew install TheZoraiz/ascii-image-converter/ascii-image-converter"
  exit 1
fi

# Get filename without extension
BASENAME=$(basename "$INPUT" .png)
# Convert to PascalCase for component name (handle underscores/hyphens)
COMPONENT_NAME=$(echo "$BASENAME" | awk -F'[-_]' '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1' OFS='')

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Generate ASCII art
if [ "$BRAILLE" = "true" ]; then
  ASCII_ART=$(ascii-image-converter "$INPUT" -W "$WIDTH" -b --threshold 0 2>/dev/null)
else
  ASCII_ART=$(ascii-image-converter "$INPUT" -W "$WIDTH" 2>/dev/null)
fi

# Escape backticks and backslashes for template literal
ESCAPED_ASCII=$(echo "$ASCII_ART" | sed 's/\\/\\\\/g' | sed 's/`/\\`/g')

# Create React component
cat > "$OUTPUT_DIR/${BASENAME}-ascii.tsx" << COMPONENT
export function ${COMPONENT_NAME}Ascii({ className }: { className?: string }) {
  return (
    <pre className={className}>
{\`${ESCAPED_ASCII}\`}
    </pre>
  )
}
COMPONENT

echo "Created: $OUTPUT_DIR/${BASENAME}-ascii.tsx"
