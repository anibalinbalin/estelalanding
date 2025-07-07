import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const teamMembers = [
  {
    name: 'Peter Del Prestito',
    role: 'Co-founder, Business & IT Operations',
    image: '/img/fotos/peter.jpg'
  },
  {
    name: 'Pablo Ferreira',
    role: 'IT Admin',
    image: '/img/fotos/pablo.jpg'
  },
  {
    name: 'Alfonso LaRosa',
    role: 'Head of IT', 
    image: '/img/fotos/alfonso.jpg'
  },
  {
    name: 'Nahuel Gonzalez',
    role: 'IT & Systems Specialist',
    image: '/img/fotos/nahuel.jpg'
  },
  {
    name: 'Aníbal Ramos', 
    role: 'Co-Founder, Head of Technology',
    image: '/img/fotos/anibal.jpg'
  },
  {
    name: 'D. Esteban Echániz',
    role: 'Finances',
    image: '/img/fotos/diego.jpg'
  }
];

const TeamMemberCard = ({ name, role, image, currentTheme }: { 
  name: string; 
  role: string; 
  image: string; 
  currentTheme: string 
}) => {
  return (
    <div className={`col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-span-4 min-[600px]:col-span-10 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)] min-[1000px]:rounded-[var(--border-radius-lg)] border p-5 flex flex-col items-center justify-center text-center aspect-square ${
      currentTheme === 'light' 
        ? 'bg-[#ffffff] border-[#e4e5e4]' 
        : 'bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)]'
    }`}>
      <div className="relative rounded-md overflow-hidden mb-4">
        <img 
          width="88" 
          height="88" 
          src={image}
          alt={name}
          className="w-[88px] h-[88px] object-cover border border-border/20 rounded-md"
        />
      </div>
      <h3 className="text-base font-medium leading-relaxed mb-1 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] tracking-wide text-[var(--content-raise-p3)]">
        {name}
      </h3>
      <p className="text-base leading-relaxed text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal tracking-wide">
        {role}
      </p>
    </div>
  );
};

export const TeamGrid = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme if available, otherwise fall back to theme, then default to 'dark'
  const currentTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';

  return (
    <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-4 min-[1000px]:gap-4 p-5 min-[600px]:p-10">
      {teamMembers.map((member, index) => (
        <TeamMemberCard 
          key={index} 
          name={member.name} 
          role={member.role}
          image={member.image}
          currentTheme={currentTheme}
        />
      ))}
    </div>
  );
};