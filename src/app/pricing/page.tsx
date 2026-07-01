import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PricingPlans } from "@/components/pricing-plans";
import { PricingComparison } from "@/components/pricing-comparison";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pricing — Milo",
  description:
    "Simple, transparent pricing for Milo. Start free, upgrade to Standard or Premium whenever you're ready.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1">
        <PricingPlans />
        <PricingComparison />
      </main>
      <Footer />
    </>
  );
}
