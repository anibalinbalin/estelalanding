"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestWorkPage() {
  return (
    <div>
      <div className="w-full px-5 sm:px-10">
        <div className="m-auto max-w-[1200px] text-center">
          <h1 
            className="text-balance m-0 mb-8 text-4xl md:text-4xl lg:text-[3.25rem] font-normal leading-[2.625rem] md:leading-[2.625rem] lg:leading-[3.625rem] tracking-normal"
            style={{
              color: 'var(--content-raise-p3)',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
            }}
          >
            Work With Us
          </h1>
          <div className="w-full grid grid-cols-12 gap-4 sm:mt-10 lg:mt-[60px]">
            <div className="col-span-5">
              <div className="w-full h-full relative flex items-center justify-center">
                <Image 
                  src="https://oxide-computer.imgix.net/office/oxide-careers-1.jpg?w=432&dpr=2&fm=webp" 
                  width={432} 
                  height={541} 
                  className="w-full max-w-full h-full block align-middle object-cover rounded-[var(--border-radius)] sm:rounded-[var(--border-radius-lg)]" 
                  alt="Oxide CEO standing chatting with two people in the office"
                />
              </div>
            </div>
            <div className="col-span-7">
              <div className="w-full relative flex h-full items-center justify-center">
                <Image 
                  src="https://oxide-computer.imgix.net/office/oxide-careers-2.jpg?w=612&dpr=2&fm=webp" 
                  width={612} 
                  height={541} 
                  className="w-full max-w-full h-full block align-middle object-cover rounded-[var(--border-radius)] sm:rounded-[var(--border-radius-lg)]" 
                  alt="Group of Oxide employees sat working on laptops"
                />
              </div>
            </div>
          </div>
          <div className="my-8 grid-cols-12 gap-6 sm:gap-8 md:grid">
            <h2 
              className="text-balance m-0 text-lg sm:text-[1.5625rem] font-normal leading-[1.625rem] sm:leading-8 tracking-wide text-left md:text-center lg:text-left md:col-span-10 lg:col-span-6"
              style={{
                color: 'var(--content-raise-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              <span style={{ color: 'var(--content-tertiary-p3)' }}>We're bonded by deeply held values and joined in a shared mission: to</span> redefine on-premises computing.
            </h2>
            <div className="col-span-12 sm:col-start-2 lg:col-start-8 sm:col-span-10 lg:col-span-5 lg:my-0 lg:block lg:pb-0 max-lg:mt-12 gap-4">
              <ul className="list-none m-0 p-0 sm:columns-2 lg:columns-1">
                <li className="mb-1 flex items-baseline justify-start sm:col-span-6">
                  <svg width="12" height="12" className="block align-middle mr-2 shrink-0" style={{ color: 'var(--content-accent-p3)' }}>
                    <circle cx="6" cy="6" r="2" fill="currentColor"/>
                  </svg>
                  <div 
                    className="font-normal leading-[1.125rem] md:leading-6 text-[.875rem] md:text-base tracking-wider md:tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We are principled
                  </div>
                </li>
                <li className="mb-1 flex items-baseline justify-start sm:col-span-6">
                  <svg width="12" height="12" className="block align-middle mr-2 shrink-0" style={{ color: 'var(--content-accent-p3)' }}>
                    <circle cx="6" cy="6" r="2" fill="currentColor"/>
                  </svg>
                  <div 
                    className="font-normal leading-[1.125rem] md:leading-6 text-[.875rem] md:text-base tracking-wider md:tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We are bold
                  </div>
                </li>
                <li className="mb-1 flex items-baseline justify-start sm:col-span-6">
                  <svg width="12" height="12" className="block align-middle mr-2 shrink-0" style={{ color: 'var(--content-accent-p3)' }}>
                    <circle cx="6" cy="6" r="2" fill="currentColor"/>
                  </svg>
                  <div 
                    className="font-normal leading-[1.125rem] md:leading-6 text-[.875rem] md:text-base tracking-wider md:tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We are team‑oriented
                  </div>
                </li>
                <li className="mb-1 flex items-baseline justify-start sm:col-span-6">
                  <svg width="12" height="12" className="block align-middle mr-2 shrink-0" style={{ color: 'var(--content-accent-p3)' }}>
                    <circle cx="6" cy="6" r="2" fill="currentColor"/>
                  </svg>
                  <div 
                    className="font-normal leading-[1.125rem] md:leading-6 text-[.875rem] md:text-base tracking-wider md:tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We are committed to our shared values
                  </div>
                </li>
              </ul>
              <Link 
                href="/principles" 
                className="mt-4 flex items-center font-normal leading-4 text-[.75rem] tracking-wider uppercase hover:opacity-80 transition-opacity"
                style={{
                  color: 'var(--content-accent-secondary-p3)',
                  textDecoration: 'inherit',
                  fontFamily: 'GT America Mono, monospace',
                  fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                }}
              >
                Read more about our values
                <svg width="12" height="12" className="block align-middle ml-1 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s]" style={{ color: 'var(--content-accent-secondary-p3)' }}>
                  <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0 h-0 text-inherit border-t border-[var(--stroke-secondary-p3)] mt-20 md:mt-10 lg:mt-48 mb-6 md:mb-10" />
      <div className="w-full px-5 sm:px-10">
        <div className="relative m-auto max-w-[1200px] mb-8 sm:mb-16">
          <div className="text-center sm:mt-[60px] lg:mt-20">
            <h2 
              className="relative text-balance m-0 mb-12 mt-8 inline-block text-[1.5625rem] lg:text-4xl font-normal leading-8 lg:leading-[2.625rem] tracking-wide lg:tracking-normal"
              style={{
                color: 'var(--content-raise-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Open Positions
              <Link 
                href="/careers/feed" 
                className="absolute m-[-.5rem] ml-2 p-2 right-[-1.25rem] sm:right-[-1.5rem]"
                style={{
                  color: 'var(--content-accent-p3)',
                  textDecoration: 'inherit'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="block align-middle">
                  <path d="M3.5 14C4.32843 14 5 13.3284 5 12.5C5 11.6716 4.32843 11 3.5 11C2.67157 11 2 11.6716 2 12.5C2 13.3284 2.67157 14 3.5 14Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M13 14C13.5523 14 14.0043 13.5507 13.959 13.0003C13.4781 7.17026 8.82974 2.52187 2.9997 2.04105C2.44928 1.99565 2 2.44772 2 3V3C2 3.55228 2.44901 3.99475 2.9986 4.04924C7.72414 4.51775 11.4823 8.27586 11.9508 13.0014C12.0053 13.551 12.4477 14 13 14V14ZM9 14C9.55228 14 10.0066 13.55 9.93835 13.002C9.48783 9.38167 6.61833 6.51217 2.99801 6.06165C2.44996 5.99344 2 6.44772 2 7V7C2 7.55228 2.45108 7.99127 2.99581 8.08226C5.5117 8.50251 7.49749 10.4883 7.91774 13.0042C8.00873 13.5489 8.44772 14 9 14V14Z" fill="currentColor"></path>
                </svg>
              </Link>
            </h2>
          </div>
          <div className="ml-4 md:ml-6 mt-[1.875rem] lg:mt-16">
            <span 
              className="font-normal leading-4 text-[.75rem] tracking-wider uppercase"
              style={{
                color: 'var(--content-accent-secondary-p3)',
                fontFamily: 'GT America Mono, monospace',
                fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
              }}
            >
              Sales
            </span>
          </div>
          <ul className="mb-8 list-none m-0 p-0 mt-2 overflow-hidden rounded-[var(--border-radius-lg)] border border-[var(--stroke-default-p3)]">
            <li className="border-b border-[var(--stroke-secondary-p3)] border-none">
              <Link 
                href="/careers/field-sales" 
                className="text-inherit grid grid-cols-12 gap-4 hover:opacity-100 hover:bg-[var(--surface-raise-p3)] p-4 md:p-6"
                style={{ textDecoration: 'inherit' }}
              >
                <h3 
                  className="text-balance m-0 text-lg md:text-[1.5625rem] font-normal leading-[1.625rem] md:leading-8 tracking-wide col-span-12 lg:col-span-4"
                  style={{
                    color: 'var(--content-raise-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Field Sales
                </h3>
                <div 
                  className="col-start-8 sm:col-start-7 col-span-2 sm:col-span-2 hidden lg:block pt-1 font-normal leading-6 text-base tracking-wide"
                  style={{
                    color: 'var(--content-secondary-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Full-time
                </div>
                <div 
                  className="col-span-2 sm:col-span-3 hidden lg:block pt-1 font-normal leading-6 text-base tracking-wide"
                  style={{
                    color: 'var(--content-secondary-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Emeryville <span style={{ color: 'var(--content-quaternary-p3)' }}>/ </span>Remote
                </div>
              </Link>
            </li>
          </ul>
          <div className="mt-8 lg:mt-10 text-center">
            <div 
              className="w-full sm:w-auto inline-block rounded-[var(--border-radius-full)] p-2"
              style={{
                color: 'var(--content-accent-p3)',
                backgroundColor: 'var(--surface-accent-secondary-p3)'
              }}
            >
              <div className="flex items-center">
                <svg width="24" height="24" className="block align-middle ml-2 md:ml-0">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
                <span 
                  className="px-2 inline-block w-full ml-2 font-normal leading-[1.125rem] sm:leading-6 text-[.875rem] sm:text-base tracking-wider sm:tracking-wide"
                  style={{
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  All positions are open to <br className="block sm:hidden" />candidates worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perks and Benefits Section */}
      <div className="relative lg:mb-44">
        <div className="mb-4 text-center px-5 sm:px-10 mt-28 sm:mt-[11.25rem]">
          <h2 className="text-balance m-0 text-[1.5625rem] lg:text-4xl font-normal leading-8 lg:leading-[2.625rem] tracking-wide lg:tracking-normal"
            style={{
              color: 'var(--content-raise-p3)',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
            }}
          >
            Working at Oxide<br/><span style={{ color: 'var(--content-tertiary-p3)' }}>Perks and Benefits</span>
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative my-6 md:my-10">
            <hr className="relative m-0 h-0 text-inherit border-t left-[-10%] w-[120%] border-[var(--stroke-secondary-p3)]" />
            <div className="absolute left-[50%] top-0 w-full max-w-[1200px] transform -translate-x-1/2 border-t border-t-[var(--stroke-accent-secondary-p3)]"></div>
          </div>
        </div>
        <div className="w-full px-5 sm:px-10">
          <div className="m-auto grid max-w-[1200px] grid-cols-12 gap-6 sm:gap-6 lg:gap-8">
            <div className="relative flex grid-cols-6 my-2 md:my-6 col-span-12 md:col-span-6">
              <div className="mr-4 md:mr-0">
                <div className="flex items-center justify-center rounded-[var(--border-radius-lg)] h-8 md:h-10 w-8 md:w-10"
                  style={{
                    color: 'var(--content-accent-p3)',
                    backgroundColor: 'var(--surface-accent-secondary-p3)'
                  }}
                >
                  <svg width="24" height="24" className="h-4 md:h-6 w-4 md:w-6 block align-middle">
                    <path d="M12 2L2 7V12C2 16.5 4.5 20.5 10 21.5C10.5 21.5 11 21.5 11.5 21.5C12 21.5 12.5 21.5 13 21.5C18.5 20.5 21 16.5 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-balance m-0 text-[.875rem] sm:text-base font-medium leading-[1.125rem] sm:leading-6 tracking-wider sm:tracking-wide mt-1 md:mt-2"
                  style={{
                    color: 'var(--content-raise-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Flexible Working Hours
                </h3>
                <p className="m-0 mt-2 font-normal leading-[1.125rem] sm:leading-6 text-[.875rem] sm:text-base tracking-wider sm:tracking-wide sm:mr-8 sm:max-w-[34rem]"
                  style={{
                    color: 'var(--content-secondary-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Our families and lives outside of our jobs are very important to us; our schedules are flexible to reflect and support that.
                </p>
              </div>
            </div>
            <div className="relative flex grid-cols-6 my-2 md:my-6 col-span-12 md:col-span-6">
              <div className="mr-4 md:mr-0">
                <div className="flex items-center justify-center rounded-[var(--border-radius-lg)] h-8 md:h-10 w-8 md:w-10"
                  style={{
                    color: 'var(--content-accent-p3)',
                    backgroundColor: 'var(--surface-accent-secondary-p3)'
                  }}
                >
                  <svg width="24" height="24" className="h-4 md:h-6 w-4 md:w-6 block align-middle">
                    <path d="M12 2L2 12H5V20H9V14H15V20H19V12H22L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-balance m-0 text-[.875rem] sm:text-base font-medium leading-[1.125rem] sm:leading-6 tracking-wider sm:tracking-wide mt-1 md:mt-2"
                  style={{
                    color: 'var(--content-raise-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Remote First
                </h3>
                <p className="m-0 mt-2 font-normal leading-[1.125rem] sm:leading-6 text-[.875rem] sm:text-base tracking-wider sm:tracking-wide sm:mr-8 sm:max-w-[34rem]"
                  style={{
                    color: 'var(--content-secondary-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Most of our team are based outside of the Bay Area. We do ask that your workday overlaps with Pacific Time for at least four hours.
                </p>
              </div>
            </div>
            <div className="relative flex grid-cols-6 my-2 md:my-6 col-span-12 md:col-span-6">
              <div className="mr-4 md:mr-0">
                <div className="flex items-center justify-center rounded-[var(--border-radius-lg)] h-8 md:h-10 w-8 md:w-10"
                  style={{
                    color: 'var(--content-accent-p3)',
                    backgroundColor: 'var(--surface-accent-secondary-p3)'
                  }}
                >
                  <svg width="24" height="24" className="h-4 md:h-6 w-4 md:w-6 block align-middle">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6ZM14.5 16H9.5C9.22 16 9 15.78 9 15.5C9 15.22 9.22 15 9.5 15H11V11H10.5C10.22 11 10 10.78 10 10.5C10 10.22 10.22 10 10.5 10H12.5C12.78 10 13 10.22 13 10.5V15H14.5C14.78 15 15 15.22 15 15.5C15 15.78 14.78 16 14.5 16Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-balance m-0 text-[.875rem] sm:text-base font-medium leading-[1.125rem] sm:leading-6 tracking-wider sm:tracking-wide mt-1 md:mt-2"
                  style={{
                    color: 'var(--content-raise-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Compensation
                </h3>
                <p className="m-0 mt-2 font-normal leading-[1.125rem] sm:leading-6 text-[.875rem] sm:text-base tracking-wider sm:tracking-wide sm:mr-8 sm:max-w-[34rem]"
                  style={{
                    color: 'var(--content-secondary-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Everyone at Oxide makes $207,264 USD, regardless of location. (Some sales positions have a lower base salary and contain a commission component.)
                </p>
                <Link href="/blog/compensation-as-a-reflection-of-values" className="flex mt-4 items-center font-normal leading-4 text-[.75rem] tracking-wider uppercase hover:opacity-80 transition-opacity"
                  style={{
                    color: 'var(--content-accent-secondary-p3)',
                    textDecoration: 'inherit',
                    fontFamily: 'GT America Mono, monospace',
                    fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                  }}
                >
                  Learn more
                  <svg width="12" height="12" className="block align-middle ml-1 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s]" style={{ color: 'var(--content-accent-secondary-p3)' }}>
                    <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative flex grid-cols-6 my-2 md:my-6 col-span-12 md:col-span-6">
              <div className="mr-4 md:mr-0">
                <div className="flex items-center justify-center rounded-[var(--border-radius-lg)] h-8 md:h-10 w-8 md:w-10"
                  style={{
                    color: 'var(--content-accent-p3)',
                    backgroundColor: 'var(--surface-accent-secondary-p3)'
                  }}
                >
                  <svg width="24" height="24" className="h-4 md:h-6 w-4 md:w-6 block align-middle">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-balance m-0 text-[.875rem] sm:text-base font-medium leading-[1.125rem] sm:leading-6 tracking-wider sm:tracking-wide mt-1 md:mt-2"
                  style={{
                    color: 'var(--content-raise-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  Premium Healthcare
                </h3>
                <p className="m-0 mt-2 font-normal leading-[1.125rem] sm:leading-6 text-[.875rem] sm:text-base tracking-wider sm:tracking-wide sm:mr-8 sm:max-w-[34rem]"
                  style={{
                    color: 'var(--content-secondary-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  We offer the best medical PPO, dental, and vision plans we can find and cover 100% of premiums for employees and dependents.
                </p>
                <Link href="/blog/benefits-as-a-reflection-of-values" className="flex mt-4 items-center font-normal leading-4 text-[.75rem] tracking-wider uppercase hover:opacity-80 transition-opacity"
                  style={{
                    color: 'var(--content-accent-secondary-p3)',
                    textDecoration: 'inherit',
                    fontFamily: 'GT America Mono, monospace',
                    fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                  }}
                >
                  Learn more
                  <svg width="12" height="12" className="block align-middle ml-1 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s]" style={{ color: 'var(--content-accent-secondary-p3)' }}>
                    <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hiring Process Section */}
      <hr className="m-0 h-0 text-inherit border-t relative mt-24 border-[var(--stroke-secondary-p3)] mb-6 md:mb-10" />
      <div className="w-full px-5 sm:px-10">
        <div className="relative m-auto grid max-w-[1200px] grid-cols-12 mt-16 md:mt-20 gap-6 sm:gap-6 lg:gap-8">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-balance m-0 text-[1.5625rem] lg:text-4xl font-normal leading-8 lg:leading-[2.625rem] tracking-wide lg:tracking-normal"
              style={{
                color: 'var(--content-raise-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Hiring Process
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:pr-10">
            <p className="my-4 m-0 font-normal leading-6 md:leading-[1.625rem] text-base md:text-lg tracking-wide md:tracking-wide"
              style={{
                color: 'var(--content-secondary-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Here&apos;s what the full interview process looks like, start to finish. If you&apos;re interested in working at Oxide, we want to make sure you have all of the information you need to make a decision, same as us.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-5 sm:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-12 gap-6 sm:gap-6 lg:gap-8 md:mb-40 md:mt-16">
          <div className="relative hidden md:block md:col-start-2 xl:col-start-1 md:col-span-5 xl:col-span-6">
            <div className="sticky left-0 top-[100px] m-0 mt-[50px]">
              <div>
                <pre className="m-0 font-normal text-[length:var(--ascii-xs-font-size)] leading-[initial] tracking-[initial]"
                  style={{
                    fontFamily: 'GT America Mono, monospace',
                    fontFeatureSettings: '"ss06" on',
                    fontStretch: 'normal'
                  }}
                >
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>               </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>               </span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>◀────────</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>[1]</span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span>          </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>               </span></span>
                  <span className="block"><span>      </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>┌───┘</span><span>               </span></span>
                  <span className="block"><span>      </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                   </span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span>      </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>◀────────────</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>[2]</span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span>      </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                   </span></span>
                  <span className="block"><span>      </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                   </span></span>
                  <span className="block"><span>      </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                   </span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>■</span><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>◀──────</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>[3]</span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span>      </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                   </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>┌───┘</span><span>                   </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                       </span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╲</span><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>◀────────────────</span><span> </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>[4]</span></span>
                  <span className="block"><span>                          </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>│</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>                       </span></span>
                  <span className="block"><span>  </span><span style={{ color: 'color(display-p3 0.96 0.73 0.27 / 1.00)' }}>╎</span><span>                       </span></span>
                </pre>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <div>
              {/* You Apply */}
              <div className="relative mt-5 flex md:grid-cols-6">
                <div className="flex flex-col mr-4 md:mr-0 md:col-start-1">
                  <div className="flex w-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[var(--border-radius-lg)] transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] delay-[.3s]"
                      style={{
                        color: 'var(--content-inverse-p3)',
                        backgroundColor: 'var(--surface-accent-p3)'
                      }}
                    >
                      <svg width="24" height="24" className="h-6 w-6 block align-middle">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-5 h-full w-10 flex-[1_1_0%] items-center justify-center text-center">
                    <div className="h-full relative inline-block w-0.5 rounded-[var(--border-radius-full)] bg-[var(--theme-accent-300)]">
                      <div className="h-full rounded-[var(--border-radius-full)] w-full absolute transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.5s]"
                        style={{ backgroundColor: 'var(--surface-accent-p3)' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="mb-10 sm:col-span-5 lg:pr-5">
                  <div className="mt-2 font-medium leading-[1.625rem] text-lg tracking-wide"
                    style={{
                      color: 'var(--content-raise-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    You Apply
                  </div>
                  <p className="m-0 mt-2 font-normal leading-6 text-base tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    You start the process by filling out an application on the page of the job you&apos;re applying for. Make sure to upload your resume and materials.
                  </p>
                </div>
              </div>
              {/* We Review */}
              <div className="relative mt-5 flex md:grid-cols-6">
                <div className="flex flex-col mr-4 md:mr-0 md:col-start-1">
                  <div className="flex w-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[var(--border-radius-lg)] transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] delay-[.3s]"
                      style={{
                        color: 'var(--content-inverse-p3)',
                        backgroundColor: 'var(--surface-accent-p3)'
                      }}
                    >
                      <svg width="24" height="24" className="h-6 w-6 block align-middle">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-5 h-full w-10 flex-[1_1_0%] items-center justify-center text-center">
                    <div className="h-full relative inline-block w-0.5 rounded-[var(--border-radius-full)] bg-[var(--theme-accent-300)]">
                      <div className="h-0 rounded-[var(--border-radius-full)] w-full absolute transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.5s]"
                        style={{ backgroundColor: 'var(--surface-accent-p3)' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="mb-10 sm:col-span-5 lg:pr-5">
                  <div className="mt-2 font-medium leading-[1.625rem] text-lg tracking-wide"
                    style={{
                      color: 'var(--content-raise-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We Review
                  </div>
                  <p className="m-0 mt-2 font-normal leading-6 text-base tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    The materials are reviewed thoroughly by a broad group of Oxide employees.
                  </p>
                  <h6 className="m-0 text-[.75rem] font-normal mt-4 leading-4 tracking-wider uppercase"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'GT America Mono, monospace',
                      fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                    }}
                  >
                    Est Time: 3-6 Weeks
                  </h6>
                </div>
              </div>
              {/* We Talk with You */}
              <div className="relative mt-5 flex md:grid-cols-6">
                <div className="flex flex-col mr-4 md:mr-0 md:col-start-1">
                  <div className="flex w-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[var(--border-radius-lg)] bg-[var(--theme-accent-300)] transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] delay-[.3s]"
                      style={{ color: 'var(--content-inverse-p3)' }}
                    >
                      <svg width="24" height="24" className="h-6 w-6 block align-middle">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-5 h-full w-10 flex-[1_1_0%] items-center justify-center text-center">
                    <div className="h-full relative inline-block w-0.5 rounded-[var(--border-radius-full)] bg-[var(--theme-accent-300)]">
                      <div className="h-0 rounded-[var(--border-radius-full)] w-full absolute transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.5s]"
                        style={{ backgroundColor: 'var(--surface-accent-p3)' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="mb-10 sm:col-span-5 lg:pr-5">
                  <div className="mt-2 font-medium leading-[1.625rem] text-lg tracking-wide"
                    style={{
                      color: 'var(--content-raise-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We Talk with You
                  </div>
                  <p className="m-0 mt-2 font-normal leading-6 text-base tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    If, based on your materials, we believe that there is a likely fit, we will work with you to schedule one-on-one conversations with people from across the company.
                  </p>
                </div>
              </div>
              {/* We Huddle */}
              <div className="relative mt-5 flex md:grid-cols-6">
                <div className="flex flex-col mr-4 md:mr-0 md:col-start-1">
                  <div className="flex w-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[var(--border-radius-lg)] bg-[var(--theme-accent-300)] transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] delay-[.3s]"
                      style={{ color: 'var(--content-inverse-p3)' }}
                    >
                      <svg width="24" height="24" className="h-6 w-6 block align-middle">
                        <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="!mb-0 sm:col-span-5 lg:pr-5">
                  <div className="mt-2 font-medium leading-[1.625rem] text-lg tracking-wide"
                    style={{
                      color: 'var(--content-raise-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We Huddle
                  </div>
                  <p className="m-0 mt-2 font-normal leading-6 text-base tracking-wide"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >
                    We get back to you with a decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <hr className="m-0 h-0 text-inherit border-t mt-24 border-[var(--stroke-secondary-p3)] mb-6 md:mb-10" />
      <div>
        <div className="w-full px-5 sm:px-10">
          <div className="my-10 m-auto max-w-[1200px] text-center">
            <div className="mb-10 lg:mb-12 mt-14">
              <h2 className="text-balance m-0 text-[1.5625rem] lg:text-4xl font-normal leading-8 lg:leading-[2.625rem] tracking-wide lg:tracking-normal"
                style={{
                  color: 'var(--content-raise-p3)',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                }}
              >
                FAQs
              </h2>
            </div>
            <div className="overflow-hidden border text-left rounded-[var(--border-radius-lg)] sm:rounded-[var(--border-radius-xl)]"
              style={{
                backgroundColor: 'var(--surface-raise-p3)',
                borderColor: 'var(--stroke-secondary-p3)',
                boxShadow: 'var(--elevation-2)'
              }}
            >
              {[
                "Can I apply to multiple open positions?",
                "How long do listings stay up?",
                "How much time should I spend on the materials?",
                "I prepared materials, but now the listing seems to be gone; can I still submit them?",
                "What are the next steps after I submit my materials?",
                "How long will it take to get a response to my application?",
                "Who reviews my materials?",
                "What's the interview process like?",
                "Do you hire people from outside of the US?",
                "What is the relative importance of the interview versus materials?",
                "How many applicants does Oxide get?",
                "Oxide has rejected my application; can I reapply later?"
              ].map((question, index, array) => (
                <div key={index} className={`border-b font-medium leading-6 md:leading-[1.625rem] text-base md:text-lg tracking-wide md:tracking-wide ${index === array.length - 1 ? 'border-none' : ''}`}
                  style={{
                    borderColor: 'var(--stroke-secondary-p3)',
                    color: 'var(--content-secondary-p3)',
                    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                  }}
                >
                  <h3 className="text-balance m-0 text-inherit font-inherit">
                    <button type="button" className="px-[18px] py-[18px] text-left w-full cursor-pointer bg-transparent bg-none normal-case font-inherit text-[100%] font-inherit leading-inherit tracking-inherit text-inherit m-0 p-0 flex justify-between outline-2 outline-offset-2 md:items-center hover:opacity-80"
                      style={{
                        fontFeatureSettings: 'inherit',
                        fontVariationSettings: 'inherit'
                      }}
                    >
                      <span>{question}</span>
                      <svg width="12" height="12" className="block align-middle shrink-0 transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] mt-1.5 md:mt-0"
                        style={{ color: 'var(--content-secondary-p3)' }}
                      >
                        <path d="M4 5l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    </button>
                  </h3>
                  <div className="overflow-hidden hidden" style={{ animation: 'accordionSlideUp .3s cubic-bezier(.87,0,.13,1)' }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Investors Section */}
      <div className="w-full px-5 sm:px-10">
        <div className="m-auto max-w-[1200px] my-24 md:my-32 lg:my-44">
          <div className="text-center">
            <h2 className="text-balance m-0 text-[1.5625rem] lg:text-4xl font-normal leading-8 lg:leading-[2.625rem] tracking-wide lg:tracking-normal"
              style={{
                color: 'var(--content-raise-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Our Investors<br/><span style={{ color: 'var(--content-tertiary-p3)' }}>Backed by the Best</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-12 gap-6 sm:gap-8">
            <div className="col-span-6 md:col-span-4 rounded-[var(--border-radius-lg)] sm:rounded-[var(--border-radius-xl)] border"
              style={{
                backgroundColor: 'var(--surface-tertiary-p3)',
                borderColor: 'var(--stroke-default-p3)'
              }}
            >
              <div className="w-full h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded flex items-center justify-center text-white font-bold">Eclipse</div>
            </div>
            <div className="col-span-6 md:col-span-4 rounded-[var(--border-radius-lg)] sm:rounded-[var(--border-radius-xl)] border"
              style={{
                backgroundColor: 'var(--surface-tertiary-p3)',
                borderColor: 'var(--stroke-default-p3)'
              }}
            >
              <div className="w-full h-24 bg-gradient-to-r from-red-500 to-red-700 rounded flex items-center justify-center text-white font-bold">Riot</div>
            </div>
            <div className="col-span-6 md:col-span-4 rounded-[var(--border-radius-lg)] sm:rounded-[var(--border-radius-xl)] border"
              style={{
                backgroundColor: 'var(--surface-tertiary-p3)',
                borderColor: 'var(--stroke-default-p3)'
              }}
            >
              <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded flex items-center justify-center text-white font-bold">Rally Ventures</div>
            </div>
            <div className="col-span-6 md:col-start-3 md:col-span-4 rounded-[var(--border-radius-lg)] sm:rounded-[var(--border-radius-xl)] border"
              style={{
                backgroundColor: 'var(--surface-tertiary-p3)',
                borderColor: 'var(--stroke-default-p3)'
              }}
            >
              <div className="w-full h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white font-bold">Intel Capital</div>
            </div>
            <div className="col-start-4 col-span-6 md:col-span-4 rounded-[var(--border-radius-lg)] sm:rounded-[var(--border-radius-xl)] border"
              style={{
                backgroundColor: 'var(--surface-tertiary-p3)',
                borderColor: 'var(--stroke-default-p3)'
              }}
            >
              <div className="w-full h-24 bg-gradient-to-r from-green-500 to-green-700 rounded flex items-center justify-center text-white font-bold">Counterpart Ventures</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}