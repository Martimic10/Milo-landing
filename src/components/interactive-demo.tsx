"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUp, Plus } from "lucide-react";
import { PhoneFrame } from "./imessage/phone-frame";
import { MessageBubble } from "./imessage/message-bubble";
import { TypingIndicator } from "./imessage/typing-indicator";
import { DateDivider } from "./imessage/date-divider";
import { suggestedPrompts, defaultReply } from "@/lib/conversations";
import type { ScriptMessage } from "@/lib/conversations";
import { cn } from "@/lib/utils";

function findReply(prompt: string): string {
  const match = suggestedPrompts.find(
    (p) => p.prompt.toLowerCase() === prompt.trim().toLowerCase()
  );
  return match?.reply ?? defaultReply;
}

export function InteractiveDemo() {
  const [messages, setMessages] = useState<ScriptMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const reply = findReply(trimmed);
    const delay = 900 + Math.min(reply.length * 16, 1400);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "milo", text: reply }]);
      setTyping(false);
    }, delay);
  }

  return (
    <section id="how-it-works" className="relative px-6 py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ink">
            Try texting Milo.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-lg mx-auto">
            No app to open. No account to configure. Just type like you would
            to a friend.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <PhoneFrame
            footer={
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-1.5"
              >
                <div className="h-7 w-7 rounded-full bg-[#e9e9eb] flex items-center justify-center shrink-0">
                  <Plus size={15} className="text-black/40" />
                </div>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="iMessage"
                  className="flex-1 min-w-0 rounded-full bg-[#e9e9eb] px-3.5 py-1.5 text-[13px] text-black placeholder:text-black/40 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  disabled={!input.trim() || typing}
                  className={cn(
                    "h-7 w-7 shrink-0 rounded-full flex items-center justify-center transition-colors",
                    input.trim() && !typing
                      ? "bg-blue text-white"
                      : "bg-[#e9e9eb] text-black/25"
                  )}
                >
                  <ArrowUp size={14} strokeWidth={2.5} />
                </button>
              </form>
            }
          >
            <div
              ref={scrollRef}
              className="flex flex-col justify-end h-full overflow-y-auto no-scrollbar pb-2"
            >
              {messages.length === 0 && !typing && (
                <div className="flex-1 flex items-center justify-center px-4 text-center">
                  <p className="text-[13px] text-muted">
                    Send Milo a message below to see how it feels.
                  </p>
                </div>
              )}
              <AnimatePresence initial={false}>
                {messages.length > 0 && <DateDivider key="date" />}
                {messages.map((msg, i) => (
                  <MessageBubble
                    key={i}
                    from={msg.from}
                    text={msg.text}
                  />
                ))}
                {typing && <TypingIndicator key="typing" />}
              </AnimatePresence>
            </div>
          </PhoneFrame>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5 max-w-xl">
            {suggestedPrompts.map((p) => (
              <button
                key={p.prompt}
                onClick={() => send(p.prompt)}
                disabled={typing}
                className="text-[13px] px-4 py-2 rounded-full border border-line text-ink/80 hover:border-blue hover:text-blue transition-colors disabled:opacity-40"
              >
                {p.prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
