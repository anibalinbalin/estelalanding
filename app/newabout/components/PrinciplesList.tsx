import React from 'react';

const missionItems = [
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#action-24"></use>
      </svg>
    ),
    title: "What We Do",
    description: "We design, implement, and maintain technology solutions that solve real business problems. Infrastructure, security, custom development, and strategic consulting."
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block align-middle">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44771 5 5 5.44772 5 6C5 6.55228 5.44771 7 6 7ZM11.5216 9.89856C11.7545 9.46738 11.3966 9 10.9065 9H5.0935C4.60343 9 4.24546 9.46738 4.47841 9.89856C5.15444 11.1499 6.47795 12 8.00001 12C9.52207 12 10.8456 11.1499 11.5216 9.89856ZM11 6C11 6.55228 10.5523 7 10 7C9.44771 7 9 6.55228 9 6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6Z" fill="currentColor"></path>
      </svg>
    ),
    title: "How We're Different",
    description: "Small team. Direct relationships. No layers of management. The person who understands your problem is the same person who solves it."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#prohibited-24"></use>
      </svg>
    ),
    title: "Why We Exist",
    description: "Most technology consulting is broken. Overpriced, underdelivered, and overcomplicated. We exist to prove it doesn't have to be this way."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#heart-24"></use>
      </svg>
    ),
    title: "Who We Serve",
    description: "Organizations that need enterprise-grade technology but want startup-level agility. Companies tired of vendor promises and consultant overhead.",
    isLast: true
  }
];

const principleItems = [
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#security-24"></use>
      </svg>
    ),
    title: "Technology Serves Business",
    description: "We start with your business goals, not our favorite technologies. Every technical decision must advance your objectives. Form follows function. Always."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#chat-24"></use>
      </svg>
    ),
    title: "Excellence Over Scale",
    description: "We choose quality over quantity. Small teams, deep expertise, direct relationships. No bureaucracy, no account managers. Do fewer things. Do them better."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#person-24"></use>
      </svg>
    ),
    title: "Reality Over Marketing",
    description: "We promise what we can deliver. We deliver what we promise. No overselling, no underwhelming. Truth is our competitive advantage."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#servers-24"></use>
      </svg>
    ),
    title: "Long-term Over Quick Wins",
    description: "We build solutions that last. Sustainable architectures, maintainable code, transferable knowledge. Today's solution shouldn't become tomorrow's problem.",
    isLast: true
  }
];

const PrincipleItem = ({ icon, title, description, isLast = false }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}) => {
  return (
    <div className="gap-4 min-[600px]:gap-6 min-[600px]:grid-cols-[repeat(8,minmax(0,1fr))] relative mt-5 flex min-[800px]:grid">
      <div className="flex flex-col mr-4 min-[800px]:mr-0 min-[800px]:col-start-[1]">
        <div className="flex w-[100%]">
          <div className="flex h-10 w-10 items-center justify-center rounded-[var(--border-radius-lg)] bg-[#162322] transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] text-[#ecbb5b]">
            {icon}
          </div>
        </div>
        {!isLast && (
          <div className="mt-5 h-[100%] w-10 flex-[1_1_0%] items-center justify-center text-center">
            <div className="h-[100%] relative inline-block w-0.5 rounded-[var(--border-radius-full)] bg-[#ecbb5b]">
              <div className="rounded-[var(--border-radius-full)] w-[100%] absolute h-0 transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.5s] bg-[#ecbb5b]"></div>
            </div>
          </div>
        )}
      </div>
      <div className={`${isLast ? '!mb-0' : 'mb-10'} min-[600px]:col-span-9 min-[800px]:col-span-7 min-[1200px]:col-span-7`}>
        <div className="mt-2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-[1.625rem] text-lg tracking-wide text-[var(--content-raise-p3)]">
          {title}
        </div>
        <p className="m-0 mt-2 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export const MissionList = () => {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[3] min-[600px]:col-span-10 min-[1000px]:col-span-8">
          <div>
            {missionItems.map((item, index) => (
              <PrincipleItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isLast={item.isLast}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PrinciplesList = () => {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto mb-16 grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[3] min-[600px]:col-span-10 min-[1000px]:col-span-8">
          <div>
            {principleItems.map((item, index) => (
              <PrincipleItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isLast={item.isLast}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};