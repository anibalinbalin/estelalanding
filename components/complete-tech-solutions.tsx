"use client";

import { useLanguage } from "@/components/language-provider";
import { X, Check, ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const CompleteTechSolutions = () => {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      sectionTitle: "The Evolution of Integration",
      figureLabel: "Fig 1. Conventional Rack",
      sectionTitle2: "The Evolution of Integration - Part 2",
      figureLabel2: "Fig 2. The Estela Approach",
      points: [
        {
          text: "Technology shouldn't hold your business back",
          highlight: "Technology shouldn't hold your business back"
        },
        {
          text: "Achieving modern infrastructure required a fundamentally new approach to system integration.",
          highlight: "fundamentally new approach to system integration"
        },
        {
          text: "Most companies inherited an architecture born of vendor lock-in — where providers couldn't work together without friction. So they built walls instead of bridges.",
          highlight: "So they built walls instead of bridges."
        },
        {
          text: "Until Estela, unified architecture remained exclusively with large enterprises, inaccessible to 85% of organizations that need it most.",
          highlight: null
        },
        {
          text: "Despite the vast need for integrated systems, companies face only fragmented options preserved by market capture, not innovation.",
          highlight: null
        },
      ],
      negativePoints: [
        {
          text: "With disparate components that you're left to design, integrate, operate – and support.",
          highlight: "With disparate components that you're left to design, integrate, operate – and support."
        },
        {
          text: "15+ vendors with incompatible systems, capping speed and efficiency.",
          highlight: "15+ vendors with incompatible systems, capping speed and efficiency."
        },
        {
          text: "Vendors pointing fingers with no real accountability, even when teams need it most.",
          highlight: "Vendors pointing fingers with no real accountability, even when teams need it most."
        },
        {
          text: "Slow time to value and punitive licensing models that drain budgets.",
          highlight: "Slow time to value and punitive licensing models that drain budgets."
        },
        {
          text: "Integration nightmares that turn 1-day tasks into 3-month projects.",
          highlight: "Integration nightmares that turn 1-day tasks into 3-month projects."
        }
      ],
      points2: [
        {
          text: "That's why we built a different way",
          highlight: "That's why we built a different way"
        },
        {
          text: "Our system delivers all the infrastructure you need to run your business, designed together end-to-end, from the network architecture to the support model.",
          highlight: "designed together end-to-end"
        },
        {
          text: "With unified operations, single-pane management, consistent security policies, and accountability that's measured in hours, not blame.",
          highlight: null,
          isQuote: true
        }
      ],
      positivePoints: [
        {
          text: "Integrated by design, unlocking team velocity with systems that work together.",
          highlight: "Integrated by design, unlocking team velocity with systems that work together."
        },
        {
          text: "Built for reliability and observability from day one.",
          highlight: "Built for reliability and observability from day one."
        },
        {
          text: "55% more efficient operations with unified management.",
          highlight: "55% more efficient operations with unified management."
        },
        {
          text: "One throat to choke — we own every outcome.",
          highlight: "One throat to choke — we own every outcome."
        }
      ],
      finalText: "Get the efficiency and speed of enterprise architecture with predictable economics, no vendor lock-in, unmatched local support, and time-to-value that's measured in days, not quarters."
    },
    es: {
      sectionTitle: "La Evolución de la Integración",
      figureLabel: "Fig 1. Rack Convencional",
      sectionTitle2: "La Evolución de la Integración - Parte 2",
      figureLabel2: "Fig 2. El Enfoque Estela",
      points: [
        {
          text: "La tecnología no debería frenar tu negocio",
          highlight: "La tecnología no debería frenar tu negocio"
        },
        {
          text: "Lograr una infraestructura moderna requirió un enfoque fundamentalmente nuevo para la integración de sistemas.",
          highlight: "enfoque fundamentalmente nuevo para la integración de sistemas"
        },
        {
          text: "La mayoría de las empresas heredaron una arquitectura nacida del vendor lock-in — donde los proveedores no podían trabajar juntos sin fricción. Así que construyeron muros en lugar de puentes.",
          highlight: "Así que construyeron muros en lugar de puentes."
        },
        {
          text: "Hasta Estela, la arquitectura unificada permaneció exclusivamente con grandes empresas, inaccesible para el 85% de las organizaciones que más la necesitan.",
          highlight: null
        },
        {
          text: "A pesar de la gran necesidad de sistemas integrados, las empresas enfrentan solo opciones fragmentadas preservadas por la captura del mercado, no por la innovación.",
          highlight: null
        },
      ],
      negativePoints: [
        {
          text: "Con componentes dispares que debes diseñar, integrar, operar y dar soporte.",
          highlight: "Con componentes dispares que debes diseñar, integrar, operar y dar soporte."
        },
        {
          text: "15+ proveedores con sistemas incompatibles, limitando velocidad y eficiencia.",
          highlight: "15+ proveedores con sistemas incompatibles, limitando velocidad y eficiencia."
        },
        {
          text: "Proveedores señalándose entre sí sin responsabilidad real, incluso cuando los equipos más lo necesitan.",
          highlight: "Proveedores señalándose entre sí sin responsabilidad real, incluso cuando los equipos más lo necesitan."
        },
        {
          text: "Tiempo lento para generar valor y modelos de licenciamiento punitivos que drenan presupuestos.",
          highlight: "Tiempo lento para generar valor y modelos de licenciamiento punitivos que drenan presupuestos."
        },
        {
          text: "Pesadillas de integración que convierten tareas de 1 día en proyectos de 3 meses.",
          highlight: "Pesadillas de integración que convierten tareas de 1 día en proyectos de 3 meses."
        }
      ],
      points2: [
        {
          text: "Por eso construimos una forma diferente",
          highlight: "Por eso construimos una forma diferente"
        },
        {
          text: "Nuestro sistema entrega toda la infraestructura que necesitas para dirigir tu negocio, diseñada en conjunto de extremo a extremo, desde la arquitectura de red hasta el modelo de soporte.",
          highlight: "diseñada en conjunto de extremo a extremo"
        },
        {
          text: "Con operaciones unificadas, gestión de panel único, políticas de seguridad consistentes, y responsabilidad que se mide en horas, no culpas.",
          highlight: null,
          isQuote: true
        }
      ],
      positivePoints: [
        {
          text: "Integrado por diseño, desbloqueando la velocidad del equipo con sistemas que trabajan juntos.",
          highlight: "Integrado por diseño, desbloqueando la velocidad del equipo con sistemas que trabajan juntos."
        },
        {
          text: "Construido para confiabilidad y observabilidad desde el primer día.",
          highlight: "Construido para confiabilidad y observabilidad desde el primer día."
        },
        {
          text: "55% más eficiente en operaciones con gestión unificada.",
          highlight: "55% más eficiente en operaciones con gestión unificada."
        },
        {
          text: "Un solo responsable — somos dueños de cada resultado.",
          highlight: "Un solo responsable — somos dueños de cada resultado."
        }
      ],
      finalText: "Obtén la eficiencia y velocidad de la arquitectura empresarial con economía predecible, sin vendor lock-in, soporte local inigualable, y tiempo de valor que se mide en días, no trimestres."
    }
  };

  const t = content[language];

  // COMMENTED OUT: ASCII Art for conventional rack
  /*
  const asciiArt = `+----------------+.            
|'.              | '.          
|  '+----------------+         
|   |            |   |[SERVER] 
|   |────────────────|         
|---|--┌──────┐.--+.  |         
|   |─┘      └───────|         
|   |        |   +---+         
|   |        |   |             
|   |        |   |             
+---|----+.--+.--|.            
 '. |    | '.  '.|  '.          
   '+--------+---+---+         
         |   |   |   |[NETWORK]
         |   |   |   |         
    +----.--│---?. |         
    |'.    '.│     '.|         
    |  +-----+---+---+         
    |  |     |   |[STORAGE]    
    |  |     |   |             
+---+--|-----+.--|.            
|'.  '.│       '.|  '.          
|  '+--+---------+---+         
|   |~> STATUS   |   |[VIRT]   
|   |ERROR       |   |         
|---|AB-8000-8W--+.  |         
|   |  | '.        '.|         
|   |  |   +---------+         
|   |  |   |                   
|   |  |   |                   
+---|--+.  |                   
 '. |    '.|                   
   '+------+                   `;
  */

  // COMMENTED OUT: Estela ASCII Art
  /*
  const estelaAsciiArt = `    THE ESTELA APPROACH
    
    +=====================+
    ||                   ||
    ||   UNIFIED SYSTEM  ||
    ||                   ||
    ||  +-----------+    ||
    ||  | COMPUTE   |    ||
    ||  +-----------+    ||
    ||  | NETWORK   |    ||
    ||  +-----------+    ||
    ||  | STORAGE   |    ||
    ||  +-----------+    ||
    ||  | SECURITY  |    ||
    ||  +-----------+    ||
    ||                   ||
    ||  [ONE PARTNER]    ||
    ||  [ONE SYSTEM]     ||
    ||  [ONE SOLUTION]   ||
    ||                   ||
    +=====================+
    
    STATUS: OPERATIONAL
    UPTIME: 99.97%
    RESPONSE: 2 HOURS`;
  */

  const TextWithHighlight = ({ text, highlight }: { text: string; highlight: string | null }) => {
    if (!highlight) return <>{text}</>;
    
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-foreground" style={{ fontWeight: 500 }}>{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="w-full">
      {/* COMMENTED OUT: Evolution of Integration Section */}
      {/* 
      <div className="container mx-auto px-5 sm:px-10">
        <h2 
          className="text-balance m-0 mb-6 sm:mb-10 lg:mb-14 text-center sm:text-left lg:pr-6"
          style={{
            fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a',
            fontSize: 'clamp(32px, 5vw, 50px)',
            lineHeight: 'clamp(36px, 5.5vw, 55px)'
          }}
        >
          Cloud computing revolutionized the global economy
        </h2>
      </div>
      
      <div className="container mx-auto grid grid-cols-12 gap-6 lg:gap-8">
        <div className="relative hidden lg:block lg:col-span-6 lg:pl-16 my-12 lg:my-11 lg:mb-32">
          <div className="text-xs uppercase tracking-wider text-muted-foreground" style={{ fontFamily: 'GT America Mono, monospace' }}>
            {t.figureLabel}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="mt-6" aria-hidden="true">
              <pre className="m-0 text-xs md:text-sm lg:text-base leading-none" style={{ fontFamily: 'GT America Mono, monospace' }}>
                <code className="text-muted-foreground">
                  {asciiArt}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="relative col-span-12 lg:col-span-6 border-l border-r border-border lg:ml-[-1.5rem]">
          <div>
            <div className="py-3 flex items-center justify-between gap-2 bg-background sticky top-16 z-10 mb-10 border-t border-b border-border px-6 sm:px-8">
              <h2 className="text-xs uppercase tracking-wider text-foreground" style={{ fontFamily: 'GT America Mono, monospace' }}>
                {t.sectionTitle}
              </h2>
              <svg width="12" height="12" className="text-muted-foreground">
                <path d="M2 6h8m0 0L6 2m4 4L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {t.points.map((point, index) => (
                <div key={index} className={`max-w-[30rem] transition-opacity duration-200 ${index > 3 ? 'opacity-40' : 'opacity-100'}`}>
                  <div className={point.isQuote ? "py-2" : "mt-3 px-6 sm:px-8"}>
                    {point.isQuote ? (
                      <div className="mx-6 sm:mx-8 text-lg sm:text-2xl border-l-2 border-accent pl-4 text-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif', fontWeight: 500 }}>
                        {point.text}
                      </div>
                    ) : (
                      <p className="text-base sm:text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif', fontWeight: 400 }}>
                        <TextWithHighlight text={point.text} highlight={point.highlight} />
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="lg:hidden mx-6 sm:mx-8">
                <div className="text-xs uppercase tracking-wider text-muted-foreground" style={{ fontFamily: 'GT America Mono, monospace' }}>
                  {t.figureLabel}
                </div>
                <div className="mt-6" aria-hidden="true">
                  <pre className="m-0 text-xs sm:text-sm leading-none overflow-x-auto" style={{ fontFamily: 'GT America Mono, monospace' }}>
                    <code className="text-muted-foreground">
                      {asciiArt}
                    </code>
                  </pre>
                </div>
              </div>

              {t.negativePoints.map((point, index) => (
                <div key={`neg-${index}`} className="max-w-[30rem] transition-opacity duration-200 opacity-40">
                  <div className="mt-3 px-6 sm:px-8">
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">
                        <X className="w-4 h-4 text-destructive" />
                      </span>
                      <p className="text-base sm:text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif', fontWeight: 400 }}>
                        <span className="text-foreground" style={{ fontWeight: 500 }}>{point.highlight}</span>
                        {point.text.replace(point.highlight, '').trim()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-6 lg:gap-8 mt-16">
        <div className="relative hidden lg:block lg:col-span-6 lg:pl-16 my-12 lg:my-11 lg:mb-32">
          <div className="text-xs uppercase tracking-wider text-muted-foreground" style={{ fontFamily: 'GT America Mono, monospace' }}>
            {t.figureLabel2}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="mt-6" aria-hidden="true">
              <pre className="m-0 text-xs md:text-sm lg:text-base leading-none" style={{ fontFamily: 'GT America Mono, monospace' }}>
                <code className="text-muted-foreground">
                  {estelaAsciiArt}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="relative col-span-12 lg:col-span-6 border-l border-r border-border lg:ml-[-1.5rem]">
          <div>
            <div className="py-3 flex items-center justify-between gap-2 bg-background sticky top-16 z-10 mb-10 border-t border-b border-border px-6 sm:px-8">
              <h2 className="text-xs uppercase tracking-wider text-foreground" style={{ fontFamily: 'GT America Mono, monospace' }}>
                {t.sectionTitle2}
              </h2>
              <svg width="12" height="12" className="text-muted-foreground">
                <path d="M2 6h8m0 0L6 2m4 4L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {t.points2.map((point, index) => (
                <div key={index} className="max-w-[30rem] transition-opacity duration-200 opacity-100">
                  <div className={point.isQuote ? "py-2" : "mt-3 px-6 sm:px-8"}>
                    {point.isQuote ? (
                      <div className="mx-6 sm:mx-8 text-lg sm:text-2xl border-l-2 border-accent pl-4 text-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif', fontWeight: 500 }}>
                        {point.text}
                      </div>
                    ) : (
                      <p className="text-base sm:text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif', fontWeight: 400 }}>
                        <TextWithHighlight text={point.text} highlight={point.highlight} />
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="lg:hidden mx-6 sm:mx-8">
                <div className="text-xs uppercase tracking-wider text-muted-foreground" style={{ fontFamily: 'GT America Mono, monospace' }}>
                  {t.figureLabel2}
                </div>
                <div className="mt-6" aria-hidden="true">
                  <pre className="m-0 text-xs sm:text-sm leading-none overflow-x-auto" style={{ fontFamily: 'GT America Mono, monospace' }}>
                    <code className="text-muted-foreground">
                      {estelaAsciiArt}
                    </code>
                  </pre>
                </div>
              </div>

              {t.positivePoints.map((point, index) => (
                <div key={`pos-${index}`} className="max-w-[30rem] transition-opacity duration-200 opacity-100">
                  <div className="mt-3 px-6 sm:px-8">
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">
                        <Check className="w-4 h-4 text-green-500" />
                      </span>
                      <p className="text-base sm:text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif', fontWeight: 400 }}>
                        <span className="text-foreground" style={{ fontWeight: 500 }}>{point.highlight}</span>
                        {point.text.replace(point.highlight, '').trim()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="max-w-[30rem] transition-opacity duration-200 opacity-100">
                <div className="mt-3 px-6 sm:px-8">
                  <p className="text-base sm:text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif', fontWeight: 400 }}>
                    {t.finalText}
                  </p>
                </div>
              </div>

              <div className="max-w-[30rem] transition-opacity duration-200 opacity-100">
                <div className="mt-6 px-6 sm:px-8">
                  <Link 
                    href="/transform" 
                    className="estela-nav-button estela-nav-button-outline"
                  >
                    Transform Your Infrastructure
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};