"use client";

import { motion } from "framer-motion";

const lines = ["No app.", "No dashboard.", "No learning curve.", "Just text."];

export function StatementSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 bg-ink">
      <div className="text-center">
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: line === "Just text." ? 1 : 0.35, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
