"use client";

import { useState, type SyntheticEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { joinWaitlist } from "@/app/actions";

export function FinalCta() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || submitting) return;

    setSubmitting(true);
    setError(null);

    const result = await joinWaitlist(firstName.trim(), email.trim());

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? "Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  return (
    <section id="waitlist" className="relative px-6 py-28 sm:py-40 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-ink max-w-3xl mx-auto leading-[1.05]"
      >
        Your next favorite contact
        <br />
        isn&rsquo;t a person.
        <br />
        <span className="text-blue">It&rsquo;s Milo.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-6 text-lg text-muted max-w-md mx-auto"
      >
        Join the waitlist and be one of the first people to experience an AI
        that lives in your text messages.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-10 max-w-md mx-auto"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-3 rounded-3xl border border-line bg-surface px-8 py-10"
            >
              <div className="h-10 w-10 rounded-full bg-blue flex items-center justify-center">
                <Check size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <p className="text-lg font-medium text-ink">You&rsquo;re on the list.</p>
              <p className="text-sm text-muted">
                We&rsquo;ll text you the moment it&rsquo;s your turn.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                className="w-full rounded-full border border-line bg-surface px-5 py-3.5 text-[15px] text-ink placeholder:text-muted/70 outline-none focus:border-blue transition-colors"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-full border border-line bg-surface px-5 py-3.5 text-[15px] text-ink placeholder:text-muted/70 outline-none focus:border-blue transition-colors"
              />
              {error && (
                <p className="text-sm text-red-600 -mt-1">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-blue text-white text-[15px] font-medium px-5 py-3.5 hover:bg-blue-dim transition-colors shadow-[0_8px_24px_-8px_rgba(37,99,235,0.5)] disabled:opacity-60"
              >
                {submitting ? "Joining..." : "Join Waitlist"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
