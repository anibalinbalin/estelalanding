"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    UnicornStudio: {
      init?: () => void;
      destroy?: () => void;
      isInitialized?: boolean;
    };
  }
}

export function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadUnicornStudio = () => {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false };
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";
        script.onload = () => {
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(script);
      } else if (window.UnicornStudio.isInitialized) {
        // Re-initialize if already loaded
        window.UnicornStudio.init();
      }
    };

    loadUnicornStudio();

    // Cleanup function
    return () => {
      if (window.UnicornStudio && window.UnicornStudio.destroy) {
        window.UnicornStudio.destroy();
      }
    };
  }, [theme]);

  // Light theme project ID: hzCHR7pkfaINHqE3pmvN
  // Dark theme project ID: 7oGZViIlL09cikCTRaRM
  const projectId = mounted && resolvedTheme === "dark" ? "7oGZViIlL09cikCTRaRM" : "hzCHR7pkfaINHqE3pmvN";

  return (
    <div 
      ref={containerRef}
      data-us-project={projectId}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ minHeight: "900px" }}
    />
  );
}