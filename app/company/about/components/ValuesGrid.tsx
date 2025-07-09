'use client'

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/components/language-provider';

const getValuesData = (language: 'en' | 'es') => {
  const content = {
    en: [
      {
        title: "Candor",
        description: "We believe in being forthright, even when that's difficult. We avoid euphemism or otherwise cloaking our opinions or experience. We respect those who speak candidly, even if we disagree with what they are saying."
      },
      {
        title: "Courage",
        description: "We are bold, willing to do things even if they are unconventional, difficult, scary or otherwise unproven. We are not, however, foolhardy: where we are contrarian, it comes not from mere desire to take a less traveled path, but from a deep and well-informed conviction."
      },
      {
        title: "Curiosity",
        description: "We are lifetime learners, unafraid of learning something new – be it an intimidating new technology, a perplexing system behavior or a novel customer use case."
      },
      {
        title: "Diversity",
        description: "We believe the best results come from combining different perspectives and uniting them with shared values and mission. We believe in and encourage diversity on any axis that remains consistent with our mission, principles and values."
      },
      {
        title: "Empathy",
        description: "Engineers serve to deliver utility to others; to do this effectively, we must be able to see the world through the eyes of others. Empathy doesn't merely inform our engineering, it guides our interactions with our colleagues, communities and customers: we treat others as we ourselves would like to be treated."
      },
      {
        title: "Humor",
        description: "While we are engaged in serious business, we don't take ourselves too seriously. We enjoy the company of our colleagues, and cannot imagine a day without laughing – even if occasionally with our mouths full."
      },
      {
        title: "Optimism",
        description: "While we are in the business of figuring out why things will fail, we nonetheless retain a deep and fundamental belief that better things are possible."
      },
      {
        title: "Resilience",
        description: "We believe in the words of the late mathematician Piet Hein: \"problems worthy of attack prove their worth by fighting back.\" We persist even when problems are fighting back, pushing through the disappointment and setbacks endemic to our chosen domain."
      },
      {
        title: "Responsibility",
        description: "We feel a duty to things larger than ourselves. We don't merely fulfill our obligations, but actively seek ways we can help. We balance our professional responsibilities with our personal and familial ones, and we honor those who do the same."
      },
      {
        title: "Rigor",
        description: "Computing systems must be correct above all else, and we must be disciplined and thorough in our approach. We insist on getting at the root of things, and are unsatisfied to merely address their symptoms."
      },
      {
        title: "Teamwork",
        description: "While our work can be individual, our mission is not: we embrace the messy interdependence of people working together in the common endeavor. We actively nurture our teams: offering encouragement when it's needed and hard truths when they're necessary."
      },
      {
        title: "Versatility",
        description: "While we must naturally specialize, our bold mission also demands that any of us may need to apply ourselves in a new domain – and indeed, that many of us will be doing this much of the time."
      }
    ],
    es: [
      {
        title: "Franqueza",
        description: "Creemos en ser directos, incluso cuando es difícil. Evitamos los eufemismos o el ocultar nuestras opiniones o experiencia. Respetamos a quienes hablan con franqueza, aunque no estemos de acuerdo con lo que dicen."
      },
      {
        title: "Coraje",
        description: "Somos audaces, dispuestos a hacer las cosas incluso si son poco convencionales, difíciles, intimidantes o no probadas. Sin embargo, no somos temerarios: cuando somos contrarios, no es por un mero deseo de tomar un camino menos transitado, sino por una convicción profunda y bien informada."
      },
      {
        title: "Curiosidad",
        description: "Somos aprendices de por vida, sin miedo a aprender algo nuevo, ya sea una nueva tecnología intimidante, un comportamiento desconcertante del sistema o un caso de uso novedoso de un cliente."
      },
      {
        title: "Diversidad",
        description: "Creemos que los mejores resultados provienen de combinar diferentes perspectivas y unirlas con valores y una misión compartidos. Creemos y fomentamos la diversidad en cualquier eje que sea consistente con nuestra misión, principios y valores."
      },
      {
        title: "Empatía",
        description: "Los ingenieros sirven para ofrecer utilidad a otros; para hacerlo eficazmente, debemos ser capaces de ver el mundo a través de los ojos de los demás. La empatía no solo informa nuestra ingeniería, sino que guía nuestras interacciones con colegas, comunidades y clientes: tratamos a los demás como nos gustaría que nos trataran a nosotros."
      },
      {
        title: "Humor",
        description: "Aunque nos dedicamos a un negocio serio, no nos tomamos a nosotros mismos demasiado en serio. Disfrutamos de la compañía de nuestros colegas y no podemos imaginar un día sin reír, aunque ocasionalmente sea con la boca llena."
      },
      {
        title: "Optimismo",
        description: "Aunque nuestro trabajo consiste en averiguar por qué las cosas van a fallar, mantenemos una creencia profunda y fundamental de que es posible lograr algo mejor."
      },
      {
        title: "Resiliencia",
        description: "Creemos en las palabras del difunto matemático Piet Hein: \"los problemas dignos de ser atacados demuestran su valía devolviendo el golpe\". Persistimos incluso cuando los problemas se resisten, superando la decepción y los contratiempos endémicos de nuestro campo."
      },
      {
        title: "Responsabilidad",
        description: "Sentimos un deber hacia cosas más grandes que nosotros mismos. No nos limitamos a cumplir nuestras obligaciones, sino que buscamos activamente formas de ayudar. Equilibramos nuestras responsabilidades profesionales con las personales y familiares, y honramos a quienes hacen lo mismo."
      },
      {
        title: "Rigor",
        description: "Los sistemas informáticos deben ser correctos por encima de todo, y debemos ser disciplinados y minuciosos en nuestro enfoque. Insistimos en llegar a la raíz de las cosas y no nos satisface simplemente abordar sus síntomas."
      },
      {
        title: "Trabajo en Equipo",
        description: "Aunque nuestro trabajo puede ser individual, nuestra misión no lo es: abrazamos la desordenada interdependencia de las personas que trabajan juntas en un esfuerzo común. Cuidamos activamente de nuestros equipos: ofreciendo aliento cuando se necesita y verdades difíciles cuando son necesarias."
      },
      {
        title: "Versatilidad",
        description: "Aunque naturalmente debemos especializarnos, nuestra audaz misión también exige que cualquiera de nosotros pueda necesitar aplicarse en un nuevo dominio, y de hecho, que muchos de nosotros lo estaremos haciendo gran parte del tiempo."
      }
    ]
  };
  
  return content[language] || content.en;
};

const valuesData = [
  {
    title: "Candor",
    description: "We believe in being forthright, even when that's difficult. We avoid euphemism or otherwise cloaking our opinions or experience. We respect those who speak candidly, even if we disagree with what they are saying."
  },
  {
    title: "Courage",
    description: "We are bold, willing to do things even if they are unconventional, difficult, scary or otherwise unproven. We are not, however, foolhardy: where we are contrarian, it comes not from mere desire to take a less traveled path, but from a deep and well-informed conviction."
  },
  {
    title: "Curiosity",
    description: "We are lifetime learners, unafraid of learning something new – be it an intimidating new technology, a perplexing system behavior or a novel customer use case."
  },
  {
    title: "Diversity",
    description: "We believe the best results come from combining different perspectives and uniting them with shared values and mission. We believe in and encourage diversity on any axis that remains consistent with our mission, principles and values."
  },
  {
    title: "Empathy",
    description: "Engineers serve to deliver utility to others; to do this effectively, we must be able to see the world through the eyes of others. Empathy doesn't merely inform our engineering, it guides our interactions with our colleagues, communities and customers: we treat others as we ourselves would like to be treated."
  },
  {
    title: "Humor",
    description: "While we are engaged in serious business, we don't take ourselves too seriously. We enjoy the company of our colleagues, and cannot imagine a day without laughing – even if occasionally with our mouths full."
  },
  {
    title: "Optimism",
    description: "While we are in the business of figuring out why things will fail, we nonetheless retain a deep and fundamental belief that better things are possible."
  },
  {
    title: "Resilience",
    description: "We believe in the words of the late mathematician Piet Hein: \"problems worthy of attack prove their worth by fighting back.\" We persist even when problems are fighting back, pushing through the disappointment and setbacks endemic to our chosen domain."
  },
  {
    title: "Responsibility",
    description: "We feel a duty to things larger than ourselves. We don't merely fulfill our obligations, but actively seek ways we can help. We balance our professional responsibilities with our personal and familial ones, and we honor those who do the same."
  },
  {
    title: "Rigor",
    description: "Computing systems must be correct above all else, and we must be disciplined and thorough in our approach. We insist on getting at the root of things, and are unsatisfied to merely address their symptoms."
  },
  {
    title: "Teamwork",
    description: "While our work can be individual, our mission is not: we embrace the messy interdependence of people working together in the common endeavor. We actively nurture our teams: offering encouragement when it's needed and hard truths when they're necessary."
  },
  {
    title: "Versatility",
    description: "While we must naturally specialize, our bold mission also demands that any of us may need to apply ourselves in a new domain – and indeed, that many of us will be doing this much of the time."
  }
];

const ValueCard = ({ title, description, currentTheme }: { title: string; description: string; currentTheme: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-span-4 min-[600px]:col-span-10 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)] min-[1000px]:rounded-[var(--border-radius-lg)] border ${
      currentTheme === 'light' 
        ? 'bg-[#ffffff] border-[#e5e5e5] min-[600px]:border-[#e4e5e4]' 
        : 'bg-[var(--surface-raise-p3)] border-[#1b2123] min-[600px]:border-[var(--border)] shadow-[var(--elevation-1)]'
    }`}>
      <h3 className="text-balance textWrapStyle-[balance] m-0 text-[inherit] [font-weight:inherit]">
        <button 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer bg-transparent bg-none normal-case font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] [font-feature-settings:inherit] [font-variation-settings:inherit] text-base font-medium leading-6 tracking-wide text-[var(--content-raise-p3)] m-0 w-[100%] items-center justify-between text-left outline-none p-4 min-[600px]:p-5 min-[1000px]:p-4 flex min-[1000px]:hidden"
        >
          {title}
          <svg 
            width="12" 
            height="12" 
            className={`block align-middle shrink-0 text-[var(--content-secondary-p3)] transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] ${
              isOpen ? 'rotate-90' : ''
            }`}
          >
            <use href="/assets/sprite-Dt029LRi.svg#carat-right-12"></use>
          </svg>
        </button>
      </h3>
      <h3 className={`text-balance textWrapStyle-[balance] m-0 text-base font-medium mb-1 border-b pb-3 pl-4 pr-5 pt-4 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide text-[#f5b944] hidden min-[1000px]:block ${
        currentTheme === 'light' 
          ? 'border-b-[#eaeaea]' 
          : 'border-b-[#1c2225]'
      }`}>
        {title}
      </h3>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(.87,0,.13,1)] min-[1000px]:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="m-0 p-4 pb-5 pr-5 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)]">
          {description}
        </p>
      </div>
      <p className="m-0 mb-4 p-4 pb-5 pr-5 pt-3 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] hidden min-[1000px]:block">
        {description}
      </p>
    </div>
  );
};

export const ValuesGrid = () => {
  const { theme, resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme if available, otherwise fall back to theme, then default to 'dark'
  const currentTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';
  
  const translatedValues = getValuesData(language);

  return (
    <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-4 min-[1000px]:gap-4 p-5 min-[600px]:p-10">
      {translatedValues.map((value, index) => (
        <ValueCard 
          key={index} 
          title={value.title} 
          description={value.description}
          currentTheme={currentTheme}
        />
      ))}
    </div>
  );
};