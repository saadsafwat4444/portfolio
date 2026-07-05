"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Briefcase } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Who I Am",
    desc: "Full Stack Web Developer specialized in building modern web applications using Laravel, Node.js, React, and Next.js.",
  },
  {
    icon: Rocket,
    title: "What Drives Me",
    desc: "I’m passionate about building scalable systems, clean architecture, and creating smooth user experiences with modern UI.",
  },
  {
    icon: Briefcase,
    title: "Experience",
    desc: "Completed ITI Full Stack program and internship at PentaValue working on real-world applications using REST APIs and modern frameworks.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">

      {/* Background grid (same style) */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.2] dark:opacity-[0.1]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black lg:text-5xl">
            About Me 👨‍💻
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            A quick overview of who I am and what I do
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border bg-background/60 backdrop-blur p-6 hover:border-primary transition"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-xl border bg-background/70">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-7">
                  {item.desc}
                </p>

                {/* Glow hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-primary/5 blur-xl rounded-2xl" />
              </motion.div>
            );
          })}

        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-8">
            I enjoy turning complex problems into simple, scalable and user-friendly web applications.
            Always learning and improving to build better software every day.
          </p>
        </motion.div>

      </div>
    </section>
  );
}