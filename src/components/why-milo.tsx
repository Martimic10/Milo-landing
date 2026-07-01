"use client";

import { motion } from "framer-motion";

const statements = [
  { title: "Milo remembers.", body: "Every detail you share becomes something Milo can use later." },
  { title: "Milo notices.", body: "Patterns in how you're doing, without you having to say it." },
  { title: "Milo helps.", body: "Not with answers you have to dig for. With action, right in the thread." },
];

export function WhyMilo() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl space-y-16 sm:space-y-24">
        {statements.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="text-center"
          >
            <h3 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ink">
              {s.title}
            </h3>
            <p className="mt-4 text-lg sm:text-xl text-muted max-w-md mx-auto">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
