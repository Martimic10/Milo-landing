"use client";

import { motion } from "framer-motion";

const memories = [
  { icon: "🏃", label: "Goal", value: "Run a marathon", offset: "sm:mt-8" },
  { icon: "❤️", label: "Birthday", value: "Mom", offset: "sm:mt-0" },
  { icon: "🍣", label: "Favorite Food", value: "Sushi", offset: "sm:mt-14" },
  { icon: "💼", label: "Project", value: "Launching a startup", offset: "sm:mt-2" },
  { icon: "✈️", label: "Upcoming Trip", value: "New York", offset: "sm:mt-10" },
];

export function MemorySection() {
  return (
    <section className="relative px-6 py-24 sm:py-36 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-blue/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-ink mb-20 sm:mb-24"
        >
          Milo remembers
          <br />
          what matters.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {memories.map((mem, i) => (
            <motion.div
              key={mem.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={mem.offset}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="w-[180px] sm:w-[200px] rounded-3xl bg-surface border border-line px-6 py-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] text-left"
              >
                <span className="text-2xl">{mem.icon}</span>
                <p className="mt-4 text-xs text-muted font-medium uppercase tracking-wide">
                  {mem.label}
                </p>
                <p className="mt-1 text-base font-semibold text-ink">
                  {mem.value}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
