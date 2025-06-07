import { HeroDemo } from "@/components/hero-demo";
import { TrustedBy } from "@/components/trusted-by";
import { DeveloperVelocitySection } from "@/components/developer-velocity-section";
import { UnicornOdysseus } from "@/components/unicorn-odysseus-section";
import { EstelaPrinciples } from "@/components/estela-principles";
import { EstelaSpeed } from "@/components/estela-speed";
import { CTASection } from "@/components/cta-section";
import { ClosingSection } from "@/components/closing-section";
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
      <Footer />
    </main>
  );
}