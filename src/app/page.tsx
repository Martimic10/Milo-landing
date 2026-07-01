import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ScrollConversations } from "@/components/scroll-conversations";
import { InteractiveDemo } from "@/components/interactive-demo";
import { MemorySection } from "@/components/memory-section";
import { StatementSection } from "@/components/statement-section";
import { WhyMilo } from "@/components/why-milo";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ScrollConversations />
        <InteractiveDemo />
        <MemorySection />
        <StatementSection />
        <WhyMilo />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
