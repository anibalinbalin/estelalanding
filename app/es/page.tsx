"use client";

import { HeroDemo } from "@/components/hero-demo";
import { TrustedBy } from "@/components/trusted-by";
import { DeveloperVelocitySection } from "@/components/developer-velocity-section";
import { UnicornOdysseus } from "@/components/unicorn-odysseus-section";
import { SmallOverScaleSection } from "@/components/small-over-scale-section";
import { TestNumbersSection } from "@/components/test-numbers-section";
import { EstelaPrinciples } from "@/components/estela-principles";
import { EstelaSpeed } from "@/components/estela-speed";
import { CTASection } from "@/components/cta-section";
import { ClosingSection } from "@/components/closing-section";
import { HandsSection } from "@/components/hands-section";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { language } = useLanguage();
  
  const content = {
    en: {
      contactButton: "Contact"
    },
    es: {
      contactButton: "CONTACTO"
    }
  };
  
  const t = content[language];
  return (
    <main>
      <HeroDemo />
      <TrustedBy />
      <DeveloperVelocitySection />
      <EstelaPrinciples />
      <EstelaSpeed />
      <CTASection />
      <UnicornOdysseus />
      <ClosingSection />
      <SmallOverScaleSection />
      <TestNumbersSection />
      <HandsSection />
      <section className="-mt-8 pt-0 sm:mt-0 sm:pt-20">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="m-auto max-w-[1200px] flex justify-end">
            <a 
              href="/es/contact" 
              className="estela-nav-button estela-nav-button-outline text-lg px-8 py-4"
            >
              {t.contactButton}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}