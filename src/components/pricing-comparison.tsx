"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { comparisonRows, pricingPlans } from "@/lib/pricing";
import { cn } from "@/lib/utils";

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={18} className="text-blue mx-auto" strokeWidth={2.5} />
    ) : (
      <Minus size={16} className="text-line mx-auto" strokeWidth={2.5} />
    );
  }
  return <span className="text-sm text-ink/80">{value}</span>;
}

export function PricingComparison() {
  return (
    <section className="relative px-6 py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-14 sm:mb-16"
        >
          Compare plans.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-x-auto rounded-3xl border border-line bg-background"
        >
          <table className="w-full min-w-140 border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="py-5 pl-6 pr-4 text-sm font-medium text-muted w-[40%]">
                  Feature
                </th>
                {pricingPlans.map((plan) => (
                  <th
                    key={plan.name}
                    className={cn(
                      "py-5 px-4 text-center",
                      plan.featured && "bg-blue/5"
                    )}
                  >
                    <span className="text-[15px] font-semibold text-ink">
                      {plan.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(
                    i !== comparisonRows.length - 1 && "border-b border-line"
                  )}
                >
                  <td className="py-4 pl-6 pr-4 text-sm text-ink/80">
                    {row.feature}
                  </td>
                  {(
                    [
                      { key: "free", plan: pricingPlans[0] },
                      { key: "standard", plan: pricingPlans[1] },
                      { key: "premium", plan: pricingPlans[2] },
                    ] as const
                  ).map(({ key, plan }) => (
                    <td
                      key={key}
                      className={cn(
                        "py-4 px-4 text-center",
                        plan.featured && "bg-blue/5"
                      )}
                    >
                      <Cell value={row[key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
