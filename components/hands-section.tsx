'use client'

import { useEffect, useState, useRef } from 'react'
import './hands-section.css'

export function HandsSection() {
  const [isAnimated, setIsAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true)
          }
          // Removed the else clause - animation stays persistent once triggered
        })
      },
      {
        threshold: 0.7, // Trigger when 70% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger when section is more fully visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32">
      <div className="pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] max-w-[var(--page-max-width)] w-[100%] mx-auto box-border">
        <div className="mx-[-50vw] pointer-events-none relative w-[100vw] left-[50%] right-[50%] box-border">
          <div className="h-[453px] w-[100%] mx-auto mb-0 mt-0 max-w-[100%] relative flex box-border before:content-[''] before:block before:w-[51vw] before:shrink-0 after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:bg-[linear-gradient(270deg,var(--color-bg-primary)_0,transparent_100%)] sm:after:w-1/2 after:w-[10%] max-[1400px]:overflow-hidden">
            <div className={`hands-container ${isAnimated ? 'animate' : ''} absolute left-[50%] top-[50%] flex w-[635px] max-h-[355px] h-[100%] flex-wrap box-border sm:-translate-y-[25%] sm:-translate-x-[103%] scale-[.84] -translate-y-[26%] -translate-x-[95%]`}>
              {/* Hand SVGs */}
              {[
                { left: 40, top: 0, rotate: 116.3 },
                { left: 0, top: 115, rotate: 110.3 },
                { left: -40, top: 270, rotate: 83.5 },
                { left: 70, top: 340, rotate: 79 },
                { left: 90, top: 150, rotate: 90.3 },
                { left: 120, top: 285, rotate: 77 },
                { left: 145, top: 245, rotate: 82 },
                { left: 134, top: 110, rotate: 100.7 },
                { left: 180, top: 45, rotate: 112.7 },
                { left: 215, top: 200, rotate: 85 },
                { left: 245, top: 15, rotate: 129 },
                { left: 250, top: 105, rotate: 108 },
                { left: 260, top: 220, rotate: 86 },
                { left: 290, top: 130, rotate: 98 },
                { left: 300, top: 60, rotate: 120 },
                { left: 325, top: 160, rotate: 89 },
                { left: 335, top: 280, rotate: 74 },
                { left: 360, top: 185, rotate: 85 },
                { left: 365, top: 140, rotate: 93 },
                { left: 372, top: 93, rotate: 108 },
                { left: 385, top: 225, rotate: 76 },
                { left: 420, top: 75, rotate: 113 },
                { left: 438, top: 60, rotate: 115 },
                { left: 425, top: 150, rotate: 91 },
                { left: 430, top: 230, rotate: 65 },
                { left: 435, top: 122, rotate: 103 },
                { left: 435, top: 122, rotate: 103 },
                { left: 455, top: 165, rotate: 85 },
                { left: 465, top: 105, rotate: 118 },
                { left: 480, top: 128, rotate: 107 },
                { left: 480, top: 200, rotate: 74 },
                { left: 500, top: 165, rotate: 95 },
                { left: 510, top: 90, rotate: 120 },
                { left: 535, top: 110, rotate: 107 },
                { left: 538, top: 140, rotate: 111 },
                { left: 541, top: 180, rotate: 85 },
                { left: 562, top: 160, rotate: 88 },
                { left: 562, top: 120, rotate: 105 },
                { left: 575, top: 140, rotate: 95 },
                { left: 600, top: 140, rotate: 100 },
                { left: 590, top: 160, rotate: 80 },
                { left: 619, top: 155, rotate: 85 },
              ].map((hand, index) => (
                <div
                  key={index}
                  className={`left-[${hand.left}px] top-[${hand.top}px] opacity-100 filter-blur-none translate-y-[0px] translate-x-[0px] absolute box-border`}
                  style={{ left: `${hand.left}px`, top: `${hand.top}px` }}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`rotate-[${hand.rotate}deg] shrink-0 box-border`}
                    style={{ transform: `rotate(${hand.rotate}deg)` }}
                  >
                    <path
                      d="M8.02893 1.02734L10.0289 1.02734V2.02734H11.0289V6.02734H13.0289V7.02734H16.0289V8.02734L18.0289 8.02734V9.02734H19.0289V10.0273H20.0289V17.0273H19.0289V20.0273H18.0289V23.0273H8.02893V20.0273H7.02893V18.0273H6.02893V16.0273H5.02893V14.0273H4.02893V13.0273H3.02893L3.02893 10.0273H6.02893V11.0273H7.02893L7.02893 2.02734H8.02893V1.02734Z"
                      fill="#010102"
                    ></path>
                    <path
                      d="M10.0289 2.02734H8.02893L8.02893 15.0273H7.02893L7.02893 12.0273H6.02893V11.0273H4.02893V13.0273H5.02893V14.0273H6.02893L6.02893 16.0273H7.02893V18.0273H8.02893V20.0273H9.02893V22.0273H17.0289V20.0273H18.0289V17.0273H19.0289V10.0273H18.0289V9.02734L17.0289 9.02734V12.0273H16.0289V8.02734H14.0289V11.0273L13.0289 11.0273V7.02734H11.0289V11.0273H10.0289V2.02734Z"
                      fill="#F7F8F8"
                    ></path>
                  </svg>
                </div>
              ))}
            </div>
            <div className={`phone-image-container ${isAnimated ? 'animate' : ''} filter-blur-none translate-y-[0%] w-auto overflow-hidden shrink-0 relative select-none box-border after:absolute after:inset-0 after:bg-[linear-gradient(270deg,var(--color-bg-primary)_0,transparent_100%)] sm:h-[100%] h-auto sm:after:content-[''] after:content-[none]`}>
              <img
                width="453"
                height="905"
                src="/img/hand.avif"
                className="text-transparent shrink-0 m-0 p-0 border-0 text-[inherit] font-[inherit] [font-weight:inherit] leading-[inherit] align-baseline max-w-[100%] box-border sm:h-[100%] h-auto sm:w-[905px] w-80 max-[640px]:translate-y-[193px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}