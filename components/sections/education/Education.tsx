"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.2] dark:opacity-[0.1]" />

      <div className="mx-auto max-w-4xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-center mb-14"
        >
          Education 🎓
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl border bg-background/60 backdrop-blur p-6 hover:border-primary transition"
        >
          <div className="flex items-start gap-4">

            <div className="p-3 rounded-xl border bg-background/70">
              <GraduationCap className="text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Bachelor of Science – Computer Science
              </h3>

              <p className="text-muted-foreground">
                Menoufia University (2018 – 2022)
              </p>

              <p className="mt-3 text-muted-foreground leading-7">
                Strong foundation in algorithms, data structures, and software engineering principles.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}