"use client";

import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative mt-4 flex h-14 items-center rounded-full border border-border/50 bg-background/80 px-4 shadow-sm shadow-primary/5 backdrop-blur-xl sm:h-16 sm:px-6"
        >
          <div className="shrink-0">
            <Logo />
          </div>

          <NavLinks />

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
