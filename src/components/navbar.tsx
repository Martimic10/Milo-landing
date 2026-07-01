"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
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
        light || open
          ? "bg-background/90 backdrop-blur-xl border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className={cn(
            "text-[19px] font-semibold tracking-tight transition-colors duration-500",
            light || open ? "text-ink" : "text-white"
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
            Get Early Access
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-9 w-9 flex flex-col items-center justify-center gap-[5px]"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className={cn(
              "h-[1.5px] w-5 block origin-center transition-colors duration-500",
              light || open ? "bg-ink" : "bg-white"
            )}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className={cn(
              "h-[1.5px] w-5 block origin-center transition-colors duration-500",
              light || open ? "bg-ink" : "bg-white"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/90 backdrop-blur-xl border-b border-line/70"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[17px] text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#waitlist"
                onClick={() => setOpen(false)}
                className="mt-2 text-center text-[15px] font-medium px-4 py-3 rounded-full bg-ink text-white"
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
