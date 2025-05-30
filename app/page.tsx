import { HeroDemo } from "@/components/hero-demo";
import { TrustedBy } from "@/components/trusted-by";
import { EvolutionSection } from "@/components/evolution-section";
import { DeveloperVelocitySection } from "@/components/developer-velocity-section";

export default function Home() {
  return (
    <main>
      <HeroDemo />
      <TrustedBy />
      <EvolutionSection />
      <DeveloperVelocitySection />
    </main>
  );
}