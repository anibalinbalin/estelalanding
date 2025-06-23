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

export default function Home() {
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
      <section className="pt-16 sm:pt-20">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="m-auto max-w-[1200px] flex justify-end">
            <a 
              href="/contact" 
              className="oxide-nav-button oxide-nav-button-outline text-lg px-8 py-4"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}