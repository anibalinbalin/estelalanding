"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";

export function EstelaPrinciples() {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty('--ascii-xs-font-size', '8.5px');
      document.documentElement.style.setProperty('--tw-aspect-h', '11');
      document.documentElement.style.setProperty('--tw-aspect-w', '13');
      
      document.documentElement.style.setProperty('--content-raise-p3', 'color(display-p3 .8431 .8471 .851)');
      document.documentElement.style.setProperty('--content-secondary-p3', 'color(display-p3 .6314 .6431 .6471)');
      document.documentElement.style.setProperty('--stroke-default-p3', 'color(display-p3 .1765 .2 .2078)');
      document.documentElement.style.setProperty('--border-radius-lg', '.375rem');
    }
  }, [mounted]);

  const content = {
    en: {
      title: "At Estela, our principles are not corporate decorations",
      subtitle: "they are the soul of why we've chosen depth over scale, why our clients stay with us, and why we remain personally invested after 13 years.",
      principle1: {
        title: "Truth Over Comfort",
        description: "We tell clients when they don't need new hardware. We admit when we're not the right fit. We lead with transparency in every conversation. This approach creates relationships built on trust."
      },
      principle2: {
        title: "Clients First, Always",
        description: "We choose clients who share our values. We respond to emergencies as part of our commitment, not as an opportunity. Because relationships outlast transactions."
      }
    },
    es: {
      title: "En Estela, nuestros principios son lo que nos definen",
      subtitle: "Son el eje de por qué hemos elegido la profundidad sobre la escala, por qué nuestros clientes permanecen con nosotros, y por qué seguimos personalmente comprometidos con cada proyecto.",
      principle1: {
        title: "Una visión completa",
        description: "Pensamos como parte de su equipo, no como externos. Diseñamos soluciones precisas, no paquetes predefinidos. La tranquilidad tecnológica es nuestra prioridad. Esta visión transforma cada proyecto."
      },
      principle2: {
        title: "Socios, No Clientes",
        description: "Trabajamos con quienes valoran la excelencia tanto como nosotros. Las urgencias las atendemos por compromiso genuino, no por obligación contractual. Construimos alianzas, no carteras de clientes."
      }
    }
  };

  const t = content[language];

  if (!mounted) return null;

  return (
    <section 
      className="mt-28 sm:mt-[11.25rem] mb-4"
      style={{ 
        backgroundColor: mounted && resolvedTheme === 'dark' ? 'rgb(8, 15, 17)' : '#ffffff',
        color: mounted && resolvedTheme === 'dark' ? 'var(--content-default-p3)' : '#08090a'
      }}
    >
      <div className="container mx-auto px-5 sm:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="grid items-start col-span-12 min-[1000px]:col-span-6 mb-4 min-[1000px]:mb-0 min-[1000px]:grid-cols-[repeat(6,minmax(0,1fr))]">
            <div className="flex flex-col col-span-5 text-center min-[1000px]:text-left min-[1000px]:mt-8">
              <h2 
                className="text-balance m-0 text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b'
                }}
              >
                {t.title}
              </h2>
              <div 
                className="text-balance mb-6 mt-1 max-w-[900px] min-[600px]:mb-10 min-[600px]:mt-3 min-[1000px]:mb-14 font-normal leading-6 min-[600px]:leading-8 text-base min-[600px]:text-[1.5625rem] tracking-wide min-[600px]:tracking-wide"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
                }}
              >
                {t.subtitle}
              </div>
            </div>
          </div>

          <div className="gap-6 mb-6 col-span-6 min-[1000px]:col-span-3">
            <div>
              <div 
                className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border p-3"
                style={{
                  backgroundColor: mounted && resolvedTheme === 'dark' ? 'rgb(59, 48, 28)' : '#f6f6f6'
                }}
              >
                <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                  <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0">
                    <pre 
                      className="m-0 font-normal absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
                      style={{
                        fontFamily: 'GT_America_Mono, monospace',
                        fontFeatureSettings: '"ss06"',
                        fontSize: 'var(--ascii-xs-font-size)',
                        fontStretch: 'normal',
                        lineHeight: 'initial',
                        letterSpacing: 'initial',
                        color: 'rgb(245, 185, 68)'
                      }}
                    >
                      <div className="whitespace-pre leading-tight">
                        {` ┌───┐ ┌───┐ ┌───┐ ┌───┐
┌┴──┐│┌┴──┐│┌┴──┐│┌┴──┐│
│`}<span className="animate-pulse">▊▊▊</span>{`│││`}<span className="animate-pulse">▊▊▊</span>{`│││`}<span className="animate-bounce">⎕⎕⎕</span>{`│││`}<span className="animate-bounce">⎕⎕⎕</span>{`││
│`}<span className="animate-pulse">▊▊▊</span>{`│││`}<span className="animate-pulse">▊▊▊</span>{`│││`}<span className="animate-bounce">⎕⎕⎕</span>{`│││`}<span className="animate-bounce">⎕⎕⎕</span>{`││
│───│││───│││───│││───││
│───│││───│││───│││───││
│`}<span className="animate-pulse">▊▊▊</span>{`│││`}<span className="animate-pulse">▊▊▊</span>{`│││`}<span className="animate-bounce">⎕⎕⎕</span>{`│││`}<span className="animate-bounce">⎕⎕⎕</span>{`││
│`}<span className="animate-pulse">▊▊▊</span>{`├┘│`}<span className="animate-pulse">▊▊▊</span>{`├┘│`}<span className="animate-bounce">⎕⎕⎕</span>{`├┘│`}<span className="animate-bounce">⎕⎕⎕</span>{`├┘
└───┘ └───┘ └───┘ └───┘`}
                      </div>
                    </pre>
                  </div>
                </div>
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b'
                }}
              >
                {t.principle1.title}
              </h3>
              <p 
                className="text-base"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
                }}
              >
                {t.principle1.description}
              </p>
            </div>
          </div>

          <div className="col-span-6 min-[1000px]:col-span-3">
            <div>
              <div 
                className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border p-3"
                style={{
                  backgroundColor: mounted && resolvedTheme === 'dark' ? 'rgb(59, 48, 28)' : '#f6f6f6'
                }}
              >
                <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                  <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0">
                    <pre 
                      className="m-0 font-normal absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
                      style={{
                        fontFamily: 'GT_America_Mono, monospace',
                        fontFeatureSettings: '"ss06"',
                        fontSize: 'var(--ascii-xs-font-size)',
                        fontStretch: 'normal',
                        lineHeight: 'initial',
                        letterSpacing: 'initial',
                        color: 'rgb(245, 185, 68)'
                      }}
                    >
                      <div className="whitespace-pre leading-relaxed text-left">
                        {`550E800-`}<span className="animate-pulse">ESTELA</span>{`-41D4-A7
16-446655440000-A0899
594-7F0C-468B-`}<span className="animate-pulse">ESTELA</span>{`-D
DAED058768-7D2A877C-F
13B-495D-6E7-8FCD9066
1AFB-`}<span className="animate-pulse">ESTELA</span>{`-3CA279074-
550E8400-E29B-41D4-A7
16-446655440000-`}<span className="animate-pulse">ESTELA</span>
                      </div>
                    </pre>
                  </div>
                </div>
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b'
                }}
              >
                {t.principle2.title}
              </h3>
              <p 
                className="text-base"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
                }}
              >
                {t.principle2.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}