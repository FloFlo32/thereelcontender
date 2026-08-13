import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { QuickFacts } from "@/components/sections/quick-facts";
import { AboutOwners } from "@/components/sections/about-owners";
import { TheVessel } from "@/components/sections/the-vessel";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickFacts />
        <AboutOwners />
        <TheVessel />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
