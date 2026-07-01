"use client";

import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="inline-flex items-center gap-1 bg-[#e9e9eb] rounded-[1.15rem] rounded-bl-md px-3.5 py-2.5 mb-1.5 w-fit"
    >
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-black/40 [animation-delay:0ms]" />
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-black/40 [animation-delay:150ms]" />
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-black/40 [animation-delay:300ms]" />
    </motion.div>
  );
}
