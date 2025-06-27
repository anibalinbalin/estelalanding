import React from 'react';

const valuesData = [
  {
    title: "Discovery First",
    description: "We spend time understanding your actual challenges, not just your perceived problems. Most technology issues are symptoms, not causes."
  },
  {
    title: "Proven Technologies",
    description: "We use technologies with track records. No bleeding edge experiments in production. Your business isn't our testing ground."
  },
  {
    title: "Measurable Outcomes",
    description: "Every project has clear success metrics defined upfront. We measure technical improvements and business impact."
  },
  {
    title: "Knowledge Transfer",
    description: "We don't create vendor lock-in. Your team learns how to maintain and evolve what we build. Independence is the goal."
  },
  {
    title: "Industry Partnerships",
    description: "Lenovo Gold Business Partner, UniFi Enterprise Certified Installer, Synology Gold Partner, Acronis Cloud Solution Provider."
  },
  {
    title: "Client Success",
    description: "100+ successful projects, 100% client retention rate, proven system stability, and rapid realization of value within the first year."
  },
  {
    title: "Direct Relationships",
    description: "Small team. No bureaucracy, no account managers. The person who understands your problem is the same person who solves it."
  },
  {
    title: "Long-term Focus",
    description: "We build solutions that last. Sustainable architectures, maintainable code, transferable knowledge. Today's solution shouldn't become tomorrow's problem."
  }
];

const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-span-4 min-[600px]:col-span-10 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)] min-[1000px]:rounded-[var(--border-radius-lg)] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)]">
      <h3 className="text-balance textWrapStyle-[balance] m-0 text-[inherit] [font-weight:inherit]">
        <button type="button" className="cursor-pointer bg-transparent bg-none normal-case font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] [font-feature-settings:inherit] [font-variation-settings:inherit] text-base font-medium leading-6 tracking-wide text-[var(--content-raise-p3)] m-0 w-[100%] items-center justify-between text-left outline-2 outline-offset-[2px] p-4 min-[600px]:p-5 min-[1000px]:p-4 flex min-[1000px]:hidden">
          {title}
          <svg width="12" height="12" className="block align-middle shrink-0 text-[var(--content-secondary-p3)] transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s]">
            <use href="/assets/sprite-Dt029LRi.svg#carat-right-12"></use>
          </svg>
        </button>
      </h3>
      <h3 className="text-balance textWrapStyle-[balance] m-0 text-base font-medium mb-1 border-b pb-3 pl-4 pr-5 pt-4 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide text-[#ecbb5b] border-b-[var(--stroke-secondary-p3)] hidden min-[1000px]:block">
        {title}
      </h3>
      <div className="-RadixAccordionContentHeight-[var(--radix-collapsible-content-height)] -RadixAccordionContentWidth-[var(--radix-collapsible-content-width)] overflow-hidden hidden [animation:accordionSlideUp_.3s_cubic-bezier(.87,0,.13,1)]"></div>
      <p className="m-0 mb-4 p-4 pb-5 pr-5 pt-3 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] hidden min-[1000px]:block">
        {description}
      </p>
    </div>
  );
};

export const ValuesGrid = () => {
  return (
    <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-4 min-[1000px]:gap-4 p-5 min-[600px]:p-10">
      {valuesData.map((value, index) => (
        <ValueCard 
          key={index} 
          title={value.title} 
          description={value.description} 
        />
      ))}
    </div>
  );
};