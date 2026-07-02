"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MessageBubble({
  from,
  text,
  showReceipt,
}: {
  from: "user" | "milo";
  text: string;
  showReceipt?: boolean;
}) {
  const isUser = from === "user";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn("flex flex-col mb-1.5", isUser ? "items-end" : "items-start")}
    >
      <div
        className={cn(
          "max-w-[78%] rounded-[1.3rem] px-4 py-2.5 text-[15px] leading-snug",
          isUser
            ? "bg-blue text-white rounded-br-md"
            : "bg-[#e9e9eb] text-black rounded-bl-md"
        )}
      >
        {text}
      </div>
      {showReceipt && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-0.5 mr-1 text-[10px] text-muted"
        >
          Read
        </motion.span>
      )}
    </motion.div>
  );
}
