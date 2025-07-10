import { ServiceSpecificationsSection } from '@/components/service-specifications-section'

import { Footer } from '@/components/footer';

export default function ServiceSpecificationsPage() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="pointerEvents-[none] absolute top-0 right-0 bottom-0 left-0 border-b bg-[var(--background)]/85 backdrop-[var(--tw-backdrop-sepia)] backdrop-[var(--tw-backdrop-saturate)] backdrop-[var(--tw-backdrop-opacity)] backdrop-[var(--tw-backdrop-invert)] backdrop-[var(--tw-backdrop-hue-rotate)] backdrop-[var(--tw-backdrop-grayscale)] backdrop-[var(--tw-backdrop-contrast)] backdrop-[var(--tw-backdrop-brightness)] backdrop-[var(--tw-backdrop-blur)] transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--border)]"></div>
        <nav dir="ltr" className="w-[100%]">
          <div className="absolute left-0 right-0 top-[54px] flex shrink items-center justify-center transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.1s]"></div>
        </nav>
      </div>
      
      <ServiceSpecificationsSection />
      
      {/* Use the project's Footer component instead of inline footer */}
      <Footer />
      
      {/* Keep the tracking elements exactly as they were */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: "none"}} 
          alt="" 
          src="https://px.ads.linkedin.com/collect/?pid=6206948&fmt=gif" 
        />
      </noscript>
      <div className="top-[336px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[1460px] h-0 w-0"></div>
      <div className="top-[659px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[977px] h-0 w-0"></div>
      <div></div>
      <div className="top-[-2px] left-0 h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-2px] left-[-2px] h-0 w-0"></div>
      <div className="top-0 left-0 absolute"></div>
      <canvas width="70" height="70" className="left-[1610px] top-0 block align-middle"></canvas>
    </>
  )
}