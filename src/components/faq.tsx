"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Do I need to download an app?",
    a: "No. Milo lives entirely in your text messages — no app, no install.",
  },
  {
    q: "What can I text Milo?",
    a: "Anything. Plans, reminders, things to remember, or just how you're feeling.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your conversations with Milo are yours, and only used to help you.",
  },
  {
    q: "What phones does Milo work on?",
    a: "Any phone that can send a text message. iPhone or Android.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink text-center mb-14"
        >
          Questions.
        </motion.h2>

        <div className="flex flex-col divide-y divide-line border-t border-b border-line">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-base sm:text-lg font-medium text-ink">
                  {faq.q}
                </span>
                <Plus
                  size={18}
                  className={cn(
                    "shrink-0 text-muted transition-transform duration-300",
                    open === i && "rotate-45 text-blue"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
