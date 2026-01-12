'use client'

import type { ReactNode } from 'react'
import { useLanguage } from '@/components/language-provider'
import { serviceSpecificationsContent, type SpecCard as SpecCardType } from '@/content/service-specifications'

const GRID_LINE_COUNT = 30

function SpecRow({ label, value, isLast }: { label: string; value: string; isLast: boolean }): ReactNode {
  return (
    <>
      <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
        <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">
          {label}
        </div>
        <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">
          {value}
        </div>
      </div>
      {!isLast && <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]" />}
    </>
  )
}

function SpecCard({ title, specs }: SpecCardType): ReactNode {
  return (
    <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px]">
          <h2 className="text-balance m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
            {title}
          </h2>
        </div>
      </div>
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
          {specs.map((spec, index) => (
            <SpecRow
              key={spec.label}
              label={spec.label}
              value={spec.value}
              isLast={index === specs.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionDivider(): ReactNode {
  return (
    <div
      style={{
        height: '1px',
        backgroundColor: 'rgba(126, 131, 133, 0.3)',
        marginBottom: '48px',
      }}
    />
  )
}

function SectionHeader({ title }: { title: string }): ReactNode {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
      <div className="m-auto max-w-[1200px]">
        <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-6">
          {title}
        </h2>
      </div>
    </div>
  )
}

function GridLines(): ReactNode {
  return (
    <div className="absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-0 flex justify-between">
      {Array.from({ length: GRID_LINE_COUNT }).map((_, i) => (
        <div key={i} className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]" />
      ))}
      <div className="absolute z-0 top-0 right-0 bottom-0 left-0">
        <div className="absolute w-[100%] bottom-0 h-24 bg-[linear-gradient(0deg,var(--background),transparent)]" />
        <div className="absolute w-[100%] top-0 h-24 [transform:translate(var(--tw-translate-x)_var(--tw-translate-y)_rotate(var(--tw-rotate)_skew(var(--tw-skew-x)_skewY(var(--tw-skew-y)_scaleX(var(--tw-scale-x)_scaleY(var(--tw-scale-y)] bg-[linear-gradient(0deg,var(--background),transparent)]" />
      </div>
    </div>
  )
}

export function ServiceSpecificationsSection(): ReactNode {
  const { language } = useLanguage()
  const t = serviceSpecificationsContent[language] || serviceSpecificationsContent.en

  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 border-b bg-[var(--background)]/85 backdrop-blur-sm transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--border)]" />
        <nav dir="ltr" className="w-[100%]">
          <div className="absolute left-0 right-0 top-[54px] flex shrink items-center justify-center transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.1s]" />
        </nav>
      </div>
      <main className="mt-0">
        <div className="flex flex-col gap-20 min-[600px]:gap-28 min-[900px]:gap-48">
          <section>
            <div className="border-b border-b-[var(--stroke-default-p3)]" />
          </section>
          <section className="pt-12 sm:pt-0">
            <div className="w-[100%] px-5 min-[600px]:px-10">
              <div className="m-auto max-w-[1200px]">
                <h1 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">
                  {t.title}
                  <br />
                  <span
                    className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal"
                    style={{ color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal' }}
                  >
                    {t.subtitle}
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              {t.sections.map((section, sectionIndex) => (
                <div key={section.title}>
                  <SectionHeader title={section.title} />
                  {section.cards.map((card) => (
                    <SpecCard key={card.title} title={card.title} specs={card.specs} />
                  ))}
                  {sectionIndex < t.sections.length - 1 && <SectionDivider />}
                </div>
              ))}

              <SectionDivider />

              {/* Bottom CTA */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
                    <GridLines />
                    <div className="relative flex items-center justify-between gap-4 border p-4 bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] min-[600px]:px-10 py-6 min-[600px]:py-8 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-lg)]">
                      <div>
                        <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal min-[500px]:font-normal min-[900px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[500px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal">
                          {t.cta.title}
                        </h2>
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <a
                          href="/contact"
                          className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)]"
                        >
                          {t.cta.button}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
