'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';

const labels = {
  en: {
    challenge: "The Challenge",
    solution: "Our Solution",
    technologies: "Technologies Used",
    results: "Key Results"
  },
  es: {
    challenge: "El Desafío",
    solution: "Nuestra Solución",
    technologies: "Tecnologías Utilizadas",
    results: "Resultados"
  }
};

interface ProjectData {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  duration: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
}

interface ProjectSectionProps {
  project: ProjectData;
}

export const ProjectSection = ({ project }: ProjectSectionProps) => {
  const { language } = useLanguage();
  const t = labels[language];

  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] max-[800px]:mb-2 max-[800px]:mt-8 min-[800px]:my-8 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="grid col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-7">
          <div className="min-[1000px]:col-start-[2] min-[1000px]:col-span-5">
            {/* Project Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-sm font-mono text-[var(--content-tertiary-p3)] uppercase tracking-wide">
                  {project.category} • {project.year}
                </span>
                <span className="text-sm text-[var(--content-secondary-p3)]">
                  {project.duration}
                </span>
              </div>
              <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-2">
                {project.title}
              </h2>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {project.client}
              </p>
            </div>

            {/* Project Details */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                {t.challenge}
              </h3>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {project.challenge}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                {t.solution}
              </h3>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {project.solution}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                {t.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-[var(--base-neutral-100)] border border-[var(--base-neutral-300)] rounded-md text-[var(--content-secondary-p3)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                {t.results}
              </h3>
              <ul className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {project.results.map((result, i) => (
                  <li key={i} className="mb-2">
                    ✓ {result}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};