"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface UnicornStudioType {
  init: (config?: { scale?: number; dpi?: number; fps?: number }) => Promise<Array<{
    element: HTMLElement;
    destroy: () => void;
    contains?: (element: HTMLElement | null) => boolean;
  }>>;
  isInitialized?: boolean;
}

declare global {
  interface Window {
    UnicornStudio?: UnicornStudioType;
  }
}

export function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{ destroy: () => void } | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const initializeScript = (callback: () => void) => {
      const version = '1.4.25';

      const existingScript = document.querySelector(
        'script[src^="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js"]'
      );

      if (existingScript) {
        if (window.UnicornStudio) {
          callback();
        } else {
          existingScript.addEventListener('load', callback);
        }
        return;
      }

      const script = document.createElement('script');
      script.src = `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v${version}/dist/unicornStudio.umd.js`;
      script.async = true;

      script.onload = () => {
        callback();
      };

      document.body.appendChild(script);
    };

    const initializeScene = async () => {
      if (!containerRef.current || !window.UnicornStudio) return;

      // Clean up previous scene
      if (sceneRef.current?.destroy) {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }

      // Clear the container to ensure fresh initialization
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }

      // Small delay to ensure cleanup is complete
      await new Promise(resolve => setTimeout(resolve, 100));

      // Initialize with configuration
      const scenes = await window.UnicornStudio.init({
        scale: 1,
        dpi: 1.5,
        fps: 30, // Lower FPS for background animation
      });

      // Find our scene
      const ourScene = scenes.find(
        (scene) =>
          scene.element === containerRef.current ||
          scene.element.contains(containerRef.current)
      );

      if (ourScene) {
        sceneRef.current = ourScene;
      }
    };

    initializeScript(() => {
      void initializeScene();
    });

    // Cleanup function
    return () => {
      if (sceneRef.current?.destroy) {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
    };
  }, [mounted, resolvedTheme]);

  // Updated project IDs with production mode
  // Light theme project ID: x32OzaamtEMBurgclZfn
  // Dark theme project ID: v0bejveYheJ4JoKnNQwP
  const projectId = resolvedTheme === "dark" ? "v0bejveYheJ4JoKnNQwP" : "x32OzaamtEMBurgclZfn";

  if (!mounted) {
    return <div className="absolute inset-0 w-full h-full -z-10" />;
  }

  return (
    <div 
      key={resolvedTheme} // Force re-render when theme changes
      ref={containerRef}
      data-us-project={`${projectId}?production=true`}
      data-us-scale="1"
      data-us-dpi="1.5"
      data-us-fps="30"
      className="absolute inset-0 w-full h-full -z-10"
      style={{ minHeight: "900px" }}
    />
  );
}