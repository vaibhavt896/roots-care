"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutHeroVideo() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Progressive Enhancement: Check for slow connections
    let isLowBandwidth = false;
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const connection = (navigator as any).connection;
      if (connection.saveData === true || 
          connection.effectiveType === 'slow-2g' || 
          connection.effectiveType === '2g') {
        isLowBandwidth = true;
      }
    }

    // Only load video if bandwidth allows
    if (!isLowBandwidth) {
      setShouldLoadVideo(true);
    }
  }, []);

  return (
    <div className="about-hero-video-wrapper relative w-full h-full">
      {/* Optimized Poster Image (LCP) */}
      <Image
        src="/video/about-poster.jpg"
        alt="About Roots & Care Poster"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />

      {shouldLoadVideo && (
        <video
          className="about-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          {/* Desktop HEVC (Safari/macOS/iOS browsers that accept HEVC) */}
          <source
            src="/video/about_hevc.mp4"
            type='video/mp4; codecs="hvc1"'
            media="(min-width: 768px)"
          />

          {/* Desktop H.264 fallback */}
          <source
            src="/video/about_h264.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />

          {/* Mobile HEVC */}
          <source
            src="/video/mobile_about_hevc.mp4"
            type='video/mp4; codecs="hvc1"'
            media="(max-width: 767px)"
          />

          {/* Mobile H.264 fallback */}
          <source
            src="/video/mobile_about_h264.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </video>
      )}
    </div>
  );
}