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

// Persists across unmount/remount so each instance gets a unique ID
let mountCounter = 0;

export function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{ destroy: () => void } | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mountId] = useState(() => ++mountCounter);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Light: x32OzaamtEMBurgclZfn | Dark: v0bejveYheJ4JoKnNQwP
  const projectId = resolvedTheme === "dark" ? "v0bejveYheJ4JoKnNQwP" : "x32OzaamtEMBurgclZfn";

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    let cancelled = false;
    const el = containerRef.current;

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
      script.onload = () => callback();
      document.body.appendChild(script);
    };

    const initializeScene = async () => {
      if (cancelled || !window.UnicornStudio) return;

      setLoaded(false);

      if (sceneRef.current?.destroy) {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }

      // Strip all UnicornStudio internal state from element
      el.replaceChildren();
      el.removeAttribute('data-us-project');
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.startsWith('data-us-') &&
            !['data-us-scale', 'data-us-dpi', 'data-us-fps'].includes(attr.name)) {
          el.removeAttribute(attr.name);
        }
      });
      el.classList.forEach(cls => {
        if (cls.startsWith('us-')) el.classList.remove(cls);
      });

      // Double rAF ensures DOM is painted before init
      await new Promise<void>(resolve =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      );

      if (cancelled || !window.UnicornStudio) return;

      // Set project attribute fresh so library treats element as new
      el.setAttribute('data-us-project', `${projectId}?production=true`);

      const scenes = await window.UnicornStudio.init({
        scale: 1,
        dpi: 1.5,
        fps: 30,
      });

      if (cancelled) return;

      const ourScene = scenes.find(
        (scene) =>
          scene.element === el || scene.element.contains(el)
      );

      if (ourScene) {
        sceneRef.current = ourScene;
        setLoaded(true);
      }
    };

    initializeScript(() => {
      void initializeScene();
    });

    return () => {
      cancelled = true;
      if (sceneRef.current?.destroy) {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
      // Remove project attr so library can't track stale element
      el.removeAttribute('data-us-project');
    };
  }, [mounted, resolvedTheme, projectId]);

  if (!mounted) {
    return <div className="absolute inset-0 w-full h-full -z-10" />;
  }

  return (
    <div
      key={`${resolvedTheme}-${mountId}`}
      ref={containerRef}
      data-us-scale="1"
      data-us-dpi="1.5"
      data-us-fps="30"
      className={`absolute inset-0 w-full h-full -z-10 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ minHeight: "900px" }}
    />
  );
}