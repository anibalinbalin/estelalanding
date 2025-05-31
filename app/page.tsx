import { HeroDemo } from "@/components/hero-demo";
import { TrustedBy } from "@/components/trusted-by";
import { EvolutionSection } from "@/components/evolution-section";
import { DeveloperVelocitySection } from "@/components/developer-velocity-section";
import { StorageSection } from "@/components/storage-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroDemo />
      <TrustedBy />
      <EvolutionSection />
      <DeveloperVelocitySection />
      <StorageSection />
      <Footer />
    </main>
  );
}