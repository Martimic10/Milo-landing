"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/pricing";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "yearly";

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="relative px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl font-semibold tracking-tight text-ink"
        >
          Simple pricing.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-lg text-muted max-w-md mx-auto"
        >
          Start free. Upgrade whenever Milo becomes part of your everyday life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 inline-flex items-center gap-3"
        >
          <div className="relative inline-flex items-center rounded-full border border-line bg-surface p-1">
            {(["monthly", "yearly"] as Billing[]).map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                className={cn(
                  "relative z-10 px-5 py-2 rounded-full text-[14px] font-medium transition-colors duration-300",
                  billing === option ? "text-white" : "text-muted hover:text-ink"
                )}
              >
                {billing === option && (
                  <motion.span
                    layoutId="billing-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                  />
                )}
                {option === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
          <span className="text-[13px] font-medium text-blue bg-blue/10 rounded-full px-3 py-1.5">
            Save up to 27%
          </span>
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl mt-16 sm:mt-20 grid sm:grid-cols-3 gap-6 items-stretch">
        {pricingPlans.map((plan, i) => {
          const price = billing === "monthly" ? plan.monthly : plan.yearly;
          const yearlyTotal = plan.yearly * 12;

          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative flex flex-col rounded-4xl border p-8 transition-shadow duration-300",
                plan.featured
                  ? "border-blue bg-surface shadow-[0_30px_60px_-25px_rgba(37,99,235,0.35)] sm:-translate-y-3"
                  : "border-line bg-surface hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.15)]"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue text-white text-[12px] font-medium px-3.5 py-1.5">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-muted">{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-1 h-14">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${plan.name}-${billing}-${price}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-end gap-1"
                  >
                    <span className="text-5xl font-semibold tracking-tight text-ink">
                      ${price}
                    </span>
                    {price > 0 && (
                      <span className="text-muted text-sm mb-1.5">/mo</span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="mt-1 text-xs text-muted h-4">
                {price === 0
                  ? "Free forever"
                  : billing === "yearly"
                  ? `Billed annually ($${yearlyTotal}/yr)`
                  : "Billed monthly"}
              </p>

              <a
                href="/#waitlist"
                className={cn(
                  "mt-7 w-full text-center rounded-full px-5 py-3 text-[15px] font-medium transition-colors",
                  plan.featured
                    ? "bg-blue text-white hover:bg-blue-dim"
                    : "bg-ink text-white hover:bg-blue"
                )}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 flex flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <Check size={16} className="text-blue shrink-0 mt-0.5" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
