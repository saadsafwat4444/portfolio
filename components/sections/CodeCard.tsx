"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CodeCard() {
  return (
    <div className="relative w-full max-w-[280px] pb-6 sm:max-w-[320px] lg:max-w-[360px]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-primary/10 to-accent/15 blur-3xl"
      />

      {/* Gradient border ring */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-primary/50 via-primary/15 to-accent/30"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-[1.6rem] border border-border/40 bg-background/50 p-1.5 shadow-2xl shadow-primary/10 backdrop-blur-sm"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem]">
          <Image
            src="/profile.png"
            alt="Saad Safwat — Full Stack Web Developer"
            fill
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 320px, 360px"
            className="object-cover object-[center_15%] transition-transform duration-700 ease-out hover:scale-[1.03]"
            priority
          />

          {/* Depth overlays */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"
          />
        </div>
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-primary/25 bg-background/95 px-4 py-2 text-xs font-medium shadow-lg backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for Hire
      </motion.div>
    </div>
  );
}
