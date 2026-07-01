"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneFrame } from "./imessage/phone-frame";
import { ConversationThread } from "./imessage/conversation-thread";
import { heroConversation } from "@/lib/conversations";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 sm:pt-48 sm:pb-32 px-6 overflow-hidden isolate"
    >
      {/* Background artwork */}
      <div className="absolute inset-0 -z-20 bg-[#0859b3]">
        <Image
          src="/hero-background.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Scrim for nav + text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/10" />
        {/* Fade into page background at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-background" />
      </div>

      {/* Soft glow behind the phone so it lifts off the artwork */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-105 w-180 rounded-full bg-white/20 blur-[120px] -z-10"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] leading-[0.95] sm:text-7xl md:text-8xl font-semibold tracking-[-0.03em] text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.25)]"
        >
          Meet Milo.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-xl sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto"
        >
          The personal AI that lives in your text messages.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-md mx-auto"
        >
          Remember more. Stay on track.
          <br />
          Get through life&rsquo;s hard moments.
          <br />
          <span className="text-white/90">Just send Milo a text.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#waitlist"
            className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-blue text-white text-[15px] font-medium hover:bg-blue-dim transition-colors shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)]"
          >
            Get Early Access
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full text-white text-[15px] font-medium border border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-20 sm:mt-24"
      >
        <div className="animate-float-slow" style={{ ["--tilt" as string]: "0deg" }}>
          <PhoneFrame>
            <ConversationThread script={heroConversation} loop />
          </PhoneFrame>
        </div>
      </motion.div>
    </section>
  );
}
