"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const UnicornOdysseus = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full section-spacing">
      <div className="container mx-auto px-5 sm:px-10">
        {/* Odiseo Effect */}
        <div className="mb-12 lg:mb-20 flex justify-center">
          <div 
            key={resolvedTheme} // Force re-render when theme changes
            data-us-project={mounted && resolvedTheme === 'dark' ? "B9PkbzuFBg1ZjtShVDIN?production=true" : "bJ8ClYm9Acq6hsxeaXbl?production=true"}
            data-us-scale="1"
            data-us-dpi="1.5"
            data-us-fps="30"
            className="w-full max-w-6xl"
            style={{ 
              width: '1440px',
              height: '900px',
              maxWidth: '100%',
              aspectRatio: '1440/900'
            }}
          />
        </div>
      </div>
    </section>
  );
};