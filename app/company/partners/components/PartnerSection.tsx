import React from 'react';

interface PartnerData {
  id: string;
  name: string;
  partnership: string;
  description: string;
  level: string;
  coverage: string;
  specializations: string;
  benefits: string[];
  solutions: string[];
  metrics: string[];
  portal: string;
}

interface PartnerSectionProps {
  partner: PartnerData;
}

export const PartnerSection = ({ partner }: PartnerSectionProps) => {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] max-[800px]:mb-2 max-[800px]:mt-8 min-[800px]:my-8 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="grid col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-7">
          <div className="min-[1000px]:col-start-[2] min-[1000px]:col-span-5">
            {/* Partner Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-sm font-mono text-[var(--content-tertiary-p3)] uppercase tracking-wide">
                  {partner.level}
                </span>
                <span className="text-sm text-[var(--content-secondary-p3)]">
                  {partner.coverage}
                </span>
              </div>
              <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-2">
                {partner.name}
              </h2>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {partner.partnership}
              </p>
            </div>

            {/* Why Partner */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                Why {partner.name}
              </h3>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide italic">
                {partner.description}
              </p>
            </div>

            {/* Partnership Details */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                Partnership Details
              </h3>
              <div className="mb-4">
                <span className="text-sm font-mono text-[var(--content-tertiary-p3)] uppercase tracking-wide">
                  Specializations:
                </span>
                <span className="text-sm ml-2 text-[var(--content-secondary-p3)]">
                  {partner.specializations}
                </span>
              </div>
            </div>

            {/* What This Means for You */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                What This Means for You
              </h3>
              <ul className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {partner.benefits.map((benefit, i) => (
                  <li key={i} className="mb-2">
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Solutions */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                Key Solutions We Deploy
              </h3>
              <div className="flex flex-wrap gap-2">
                {partner.solutions.map((solution, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-[var(--base-neutral-100)] border border-[var(--base-neutral-300)] rounded-md text-[var(--content-secondary-p3)]">
                    {solution}
                  </span>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="mb-6">
              <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                Success Metrics
              </h3>
              <ul className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {partner.metrics.map((metric, i) => (
                  <li key={i} className="mb-2">
                    - {metric}
                  </li>
                ))}
              </ul>
            </div>

            {/* Portal Link */}
            <div className="bg-[var(--base-neutral-50)] border border-[var(--base-neutral-200)] rounded-xl p-6 mb-8">
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                <a href="#" className="text-[var(--content-tertiary-p3)] hover:text-[var(--content-raise-p3)] transition-colors">
                  [{partner.portal}]
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};