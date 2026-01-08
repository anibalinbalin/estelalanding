import { ServiceSpecificationsSection } from '@/components/service-specifications-section'

import { Footer } from '@/components/footer';

export default function ServiceSpecificationsPage() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 border-b bg-[var(--background)]/85 backdrop-blur-sm transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--border)]"></div>
        <nav dir="ltr" className="w-[100%]">
          <div className="absolute left-0 right-0 top-[54px] flex shrink items-center justify-center transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.1s]"></div>
        </nav>
      </div>
      
      <ServiceSpecificationsSection />
      
      <Footer />
    </>
  )
}