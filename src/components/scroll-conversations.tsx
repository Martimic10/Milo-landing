"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "./imessage/phone-frame";
import { ConversationThread } from "./imessage/conversation-thread";
import { scrollScenes } from "@/lib/conversations";
import { cn } from "@/lib/utils";

function Scene({ index }: { index: number }) {
  const scene = scrollScenes[index];
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      <div className={cn("flex items-center justify-center", reversed && "md:order-2")}>
        <div className="relative scale-[0.82] sm:scale-90 origin-center">
          <PhoneFrame>
            <ConversationThread script={scene.script} loop />
          </PhoneFrame>
        </div>
      </div>

      <div className={cn(reversed && "md:order-1")}>
        <span className="text-sm font-mono text-muted">
          ({index + 1})
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-[1.1]">
          {scene.headline}
        </h3>
        <p className="mt-4 text-lg text-muted max-w-md leading-relaxed">
          {scene.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ScrollConversations() {
  return (
    <section className="relative px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ink">
            One conversation.
            <br />
            Every part of life.
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {scrollScenes.map((_, i) => (
            <Scene key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
