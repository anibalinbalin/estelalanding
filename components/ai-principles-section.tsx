"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { AsciiKeyboard } from "@/components/ascii-keyboard";

export function AIPrinciplesSection() {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "AI is a tool. We are the criteria.",
      subtitle: "Everyone added AI to their homepage. We added it to our process. The difference: one is a label, the other is a method. Harvard says AI doesn\u2019t reduce work\u2009\u2014\u2009it intensifies it. We agree. That\u2019s why it needs someone at the wheel.",
      principle1: {
        title: "The machine proposes. We decide.",
        description: "A six-person team with AI can deliver what a fifty-person team delivers without it. But only if someone knows what to accept, what to reject, and why. AI makes speed cheap. Judgment remains expensive. We sell the expensive part."
      },
      principle2: {
        title: "We vibe code. So does everyone.",
        description: "There\u2019s no going back \u2014 AI writes faster than any human. The question isn\u2019t whether you use it, but whether someone checks the output. We check. We test. We sign what we ship."
      }
    },
    es: {
      title: "La IA es una herramienta. Nosotros somos el criterio.",
      subtitle: "Todos agregaron IA a su p\u00e1gina web. Nosotros la agregamos a nuestro proceso. La diferencia: uno es un r\u00f3tulo, el otro es un m\u00e9todo. Harvard dice que la IA no reduce el trabajo\u2009\u2014\u2009lo intensifica. Estamos de acuerdo. Por eso necesita a alguien al volante.",
      principle1: {
        title: "La m\u00e1quina propone. Nosotros decidimos.",
        description: "Un equipo de seis personas con IA puede entregar lo que un equipo de cincuenta entrega sin ella. Pero solo si alguien sabe qu\u00e9 aceptar, qu\u00e9 rechazar, y por qu\u00e9. La IA abarat\u00f3 la velocidad. El criterio sigue siendo caro. Vendemos la parte cara."
      },
      principle2: {
        title: "Hacemos vibe coding. Como todos.",
        description: "No hay vuelta atr\u00e1s \u2014 la IA escribe m\u00e1s r\u00e1pido que cualquier humano. La pregunta no es si la us\u00e1s, sino si alguien revisa lo que sale. Nosotros revisamos. Probamos. Firmamos lo que entregamos."
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
                    <AsciiKeyboard />
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
