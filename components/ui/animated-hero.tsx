"use client";

import { useEffect, useState } from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { UnicornBackground } from "@/components/ui/unicorn-background";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";

function Hero() {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const content = {
    en: {
      title: "When technology\nmeets wisdom",
      subtitle: "Guiding businesses through technological transformations with the perfect balance of trusted expertise and innovative insight.",
      signUp: "Sign up here",
      call: "Jump on a call"
    },
    es: {
      title: "Cuando la tecnología\ny el conocimiento convergen",
      subtitle: "Guiando a las empresas a través de transformaciones tecnológicas con el equilibrio perfecto entre experiencia confiable e innovación.",
      signUp: "Regístrate aquí",
      call: "Agenda una llamada"
    }
  };
  
  const t = content[language];
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <UnicornBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-5 sm:px-10">
        <div className="flex min-h-screen items-center py-24">
          <div className="w-full">
            {/* Hero Content */}
            <h1 
              className="text-[65px] leading-[65px] tracking-normal"
              style={{ 
                fontFamily: 'SuisseIntl, -apple-system, "system-ui", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p 
              className="mt-6 text-[22px] leading-[29px] tracking-normal max-w-2xl"
              style={{ 
                fontFamily: 'SuisseIntl, -apple-system, "system-ui", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                color: '#7e8385'
              }}
            >
              {t.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4 flex-col sm:flex-row">
              <button 
                className="oxide-nav-button oxide-nav-button-primary"
              >
                {t.signUp} <MoveRight className="w-4 h-4 ml-2" />
              </button>
              <button 
                className="oxide-nav-button oxide-nav-button-outline"
              >
                {t.call} <PhoneCall className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };