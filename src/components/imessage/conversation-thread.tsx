"use client";

import { AnimatePresence } from "framer-motion";
import { MessageBubble } from "./message-bubble";
import { TypingIndicator } from "./typing-indicator";
import { useConversationPlayer } from "@/lib/use-conversation-player";
import type { ScriptMessage } from "@/lib/conversations";

export function ConversationThread({
  script,
  loop = true,
}: {
  script: ScriptMessage[];
  loop?: boolean;
}) {
  const { visibleCount, isTyping } = useConversationPlayer(script, { loop });
  const visible = script.slice(0, visibleCount);
  const lastUserIndex = (() => {
    for (let i = visible.length - 1; i >= 0; i--) {
      if (visible[i].from === "user") return i;
    }
    return -1;
  })();

  return (
    <div className="flex flex-col justify-end h-full">
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((msg, i) => (
          <MessageBubble
            key={`${msg.from}-${i}-${msg.text.slice(0, 8)}`}
            from={msg.from}
            text={msg.text}
            showReceipt={i === lastUserIndex && i === visible.length - 1}
          />
        ))}
        {isTyping && <TypingIndicator key="typing" />}
      </AnimatePresence>
    </div>
  );
}
