"use client";

import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import { UnicornBackground } from "@/components/ui/unicorn-background";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { Link } from "next-view-transitions";
import './hero-animations.css';

function Hero() {
  const { } = useTheme();
  const { language } = useLanguage();
  const [, setMounted] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Trigger animations after component mounts
    setIsAnimated(true);
  }, []);
  
  const content = {
    en: {
      title: "The shortest path between\nthe problem and the solution",
      subtitle: "The Greeks invented logic, geometry, and a god for every need. We apply the first two to build solutions. From the third—the gods, not the needs—we kept only the marble, which requires no updates.",
      contact: "Our Approach"
    },
    es: {
      title: "El camino más corto entre\nel problema y la solución",
      subtitle: "Los griegos inventaron la lógica, la geometría y un dios para cada necesidad. Nosotros aplicamos las dos primeras para construir soluciones. De la tercera categoría —los dioses, no las necesidades— conservamos solo el mármol, que no requiere actualizaciones.",
      contact: "Nuestro Enfoque"
    }
  };
  
  const t = content[language];
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effect */}
      <div className={`absolute inset-0 -z-10 ${isAnimated ? 'hero-background' : 'opacity-0'}`}>
        <UnicornBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-5 sm:px-10">
        <div className="flex min-h-screen items-start pt-[25vh] pb-24">
          <div className="w-full">
            {/* Hero Content */}
            <h1 
              className={`text-[36px] leading-[42px] sm:text-[65px] sm:leading-[65px] tracking-normal text-foreground ${isAnimated ? 'hero-title' : 'opacity-0'}`}
              style={{ 
                fontFamily: 'SuisseIntl, -apple-system, "system-ui", Helvetica, Arial, sans-serif',
                fontWeight: 400
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
              className={`mt-2 min-[500px]:mt-4 text-[16px] leading-[24px] sm:text-[24px] sm:leading-[34px] tracking-normal w-1/2 sm:w-full max-w-2xl text-foreground sm:text-[#999999] ${isAnimated ? 'hero-subtitle' : 'opacity-0'}`}
              style={{ 
                fontFamily: 'SuisseIntl, -apple-system, "system-ui", Helvetica, Arial, sans-serif',
                fontWeight: 400
              }}
            >
              {t.subtitle}
            </p>
            
            {/* CTA Button */}
            <div className={`mt-6 min-[700px]:mt-10 ${isAnimated ? 'hero-cta' : 'opacity-0'}`}>
              <Link
                href="/method"
                className="estela-nav-button estela-nav-button-primary inline-flex items-center"
              >
                {t.contact} <MoveRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };