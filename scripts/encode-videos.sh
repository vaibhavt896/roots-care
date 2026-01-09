#!/bin/bash

# Hard Trust Video Pipeline Script
# Requires: ffmpeg
# Usage: ./scripts/encode-videos.sh input_video.mp4 output_name

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: ./scripts/encode-videos.sh input.mp4 output_base_name"
  exit 1
fi

INPUT=$1
BASE=$2
DIR="public/video"

echo "🚀 Starting High-Performance Video Pipeline for $BASE..."

# 1. Desktop HEVC (High Efficiency - Safari/macOS/iOS)
echo "--- Encoding Desktop HEVC ---"
ffmpeg -i "$INPUT" -c:v libx265 -crf 28 -preset slow -tag:v hvc1 -an "$DIR/${BASE}_hevc.mp4" -y

# 2. Desktop H.264 (Fallback - Chrome/Android)
echo "--- Encoding Desktop H.264 Fallback ---"
ffmpeg -i "$INPUT" -c:v libx264 -crf 23 -preset slow -an "$DIR/${BASE}_h264.mp4" -y

# 3. Mobile HEVC (Reduced resolution/bitrate for 2G/3G)
echo "--- Encoding Mobile HEVC ---"
ffmpeg -i "$INPUT" -vf "scale='min(720,iw)':-2" -c:v libx265 -crf 32 -preset fast -tag:v hvc1 -an "$DIR/mobile_${BASE}_hevc.mp4" -y

# 4. Mobile H.264 (Fallback)
echo "--- Encoding Mobile H.264 ---"
ffmpeg -i "$INPUT" -vf "scale='min(720,iw)':-2" -c:v libx264 -crf 28 -preset fast -an "$DIR/mobile_${BASE}_h264.mp4" -y

echo "✅ Pipeline complete. Assets ready in $DIR"
