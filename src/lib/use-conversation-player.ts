"use client";

import { useEffect, useRef, useState } from "react";
import type { ScriptMessage } from "./conversations";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useConversationPlayer(
  script: ScriptMessage[],
  options?: { loop?: boolean; restartDelay?: number; startDelay?: number }
) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    async function play() {
      setVisibleCount(0);
      setIsTyping(false);
      await wait(options?.startDelay ?? 500);

      for (let i = 0; i < script.length; i++) {
        if (cancelledRef.current) return;
        const msg = script[i];

        if (msg.from === "milo") {
          setIsTyping(true);
          await wait(1000 + Math.min(msg.text.length * 18, 1200));
          if (cancelledRef.current) return;
          setIsTyping(false);
        } else {
          await wait(i === 0 ? 300 : 1100);
        }

        if (cancelledRef.current) return;
        setVisibleCount(i + 1);
        await wait(500);
      }

      if (options?.loop && !cancelledRef.current) {
        await wait(options?.restartDelay ?? 3000);
        if (!cancelledRef.current) play();
      }
    }

    play();

    return () => {
      cancelledRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [script]);

  return { visibleCount, isTyping };
}
