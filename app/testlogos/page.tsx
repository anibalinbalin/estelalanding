"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TestLogosPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main 
      className="min-h-screen"
      style={{ 
        backgroundColor: mounted && resolvedTheme === 'dark' ? '#080f11' : '#ffffff',
        color: mounted && resolvedTheme === 'dark' ? 'var(--content-default-p3)' : '#08090a'
      }}
    >
      <div className="container mx-auto px-5 sm:px-10 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-6xl font-normal mb-6"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a'
              }}
            >
              Logo Carousel Test
            </h1>
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
              }}
            >
              Testing the logo carousel component with our company logos
            </p>
          </div>
          
          <div className="flex justify-center items-center min-h-[400px]">
            <LogoCarousel columnCount={3} />
          </div>
          
          <div className="mt-16 text-center">
            <h2 
              className="text-2xl md:text-3xl font-normal mb-4"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a'
              }}
            >
              Two Column Version
            </h2>
            <div className="flex justify-center items-center min-h-[300px]">
              <LogoCarousel columnCount={2} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}