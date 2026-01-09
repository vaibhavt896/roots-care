"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Lenis
    // optimization: Don't use smooth scroll on touch devices (mobile/tablet) for native feel and performance
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(max-width: 768px)").matches;
    
    if (isTouch) return;

    // Dynamic import to save bundle size on mobile
    import("lenis").then((LenisModule) => {
      const Lenis = LenisModule.default;
      const lenis = new Lenis({
        duration: 1.2, // Duration of the scroll animation (higher = smoother/slower)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      // RAF loop
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });

    // Clean up
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
