import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
      <h3 className="text-balance m-0 text-[inherit] [font-weight:inherit]">
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
      <h3 className={`text-balance m-0 text-base font-medium mb-1 border-b pb-3 pl-4 pr-5 pt-4 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide text-[#f5b944] hidden min-[1000px]:block ${
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme if available, otherwise fall back to theme, then default to 'dark'
  const currentTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';

  return (
    <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-4 min-[1000px]:gap-4 p-5 min-[600px]:p-10">
      {valuesData.map((value, index) => (
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