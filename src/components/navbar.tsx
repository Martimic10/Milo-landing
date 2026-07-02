"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = solid || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        light
          ? "bg-background/90 backdrop-blur-xl border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className={cn(
            "text-[19px] font-semibold tracking-tight transition-colors duration-500",
            light ? "text-ink" : "text-white"
          )}
        >
          Milo
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[14px] transition-colors duration-500",
                light
                  ? "text-muted hover:text-ink"
                  : "text-white/75 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#waitlist"
            className={cn(
              "text-[14px] font-medium px-4 py-2 rounded-full transition-colors duration-500",
              light
                ? "bg-ink text-white hover:bg-blue"
                : "bg-white text-ink hover:bg-blue hover:text-white"
            )}
          >
            Join Waitlist
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden h-10 w-10 rounded-full border flex items-center justify-center transition-colors duration-500",
            light
              ? "border-line text-ink"
              : "border-white/40 text-white"
          )}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-19 inset-x-4 z-40 rounded-3xl border border-line bg-background shadow-2xl overflow-hidden origin-top"
          >
            <nav className="flex flex-col px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-xl text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="my-2 border-t border-line" />
              <a
                href="/#waitlist"
                onClick={() => setOpen(false)}
                className="mt-4 text-center text-[15px] font-medium px-5 py-4 rounded-full bg-ink text-white"
              >
                Get Early Access
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
