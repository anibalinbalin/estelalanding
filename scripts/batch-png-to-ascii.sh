#!/bin/bash
# Batch convert PNGs to ASCII React components
# Usage: ./scripts/batch-png-to-ascii.sh <input-dir> [width] [output-dir]

set -e

INPUT_DIR="$1"
WIDTH="${2:-40}"
OUTPUT_DIR="${3:-components/ascii-logos}"
BRAILLE="${4:-false}"

if [ -z "$INPUT_DIR" ]; then
  echo "Usage: $0 <input-dir> [width] [output-dir] [braille]"
  echo ""
  echo "Examples:"
  echo "  $0 public/logos                              # Main logos"
  echo "  $0 public/company_logos/logos/white 30       # Partner logos, narrower"
  echo "  $0 public/company_logos/logos/black 36 components/ascii-partners true  # Braille mode"
  exit 1
fi

SCRIPT_DIR="$(dirname "$0")"
COUNT=0

for png in "$INPUT_DIR"/*.png; do
  [ -f "$png" ] || continue
  "$SCRIPT_DIR/png-to-ascii.sh" "$png" "$WIDTH" "$OUTPUT_DIR" "$BRAILLE"
  ((COUNT++))
done

echo ""
echo "✓ Converted $COUNT images to $OUTPUT_DIR"

# Generate index file
echo "// Auto-generated index" > "$OUTPUT_DIR/index.ts"
for tsx in "$OUTPUT_DIR"/*-ascii.tsx; do
  [ -f "$tsx" ] || continue
  BASENAME=$(basename "$tsx" .tsx)
  # Extract component name from file
  COMPONENT=$(grep -o "export function [A-Za-z0-9]*Ascii" "$tsx" | sed 's/export function //')
  echo "export { $COMPONENT } from './$BASENAME'" >> "$OUTPUT_DIR/index.ts"
done

echo "✓ Generated $OUTPUT_DIR/index.ts"
