"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const data = [
  {
    title: "PentaValue – Full Stack Intern",
    icon: Briefcase,
    desc: "Worked with Node.js, Express.js, NestJS, React.js, and Next.js. Built REST APIs, collaborated on features, debugging, and Git workflows.",
  },
  {
    title: "ITI – Full Stack Web Development",
    icon: GraduationCap,
    desc: "Intensive training in PHP (Laravel) and Angular. Built full-stack apps with authentication, CRUD, MySQL, and REST APIs.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">

      <div className="mx-auto max-w-5xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-center mb-14"
        >
          Experience & Training 💼
        </motion.h2>

        <div className="space-y-6">

          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border bg-background/60 backdrop-blur p-6 hover:border-primary transition"
              >
                <div className="flex gap-4">

                  <div className="p-3 rounded-xl border bg-background/70">
                    <Icon className="text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-muted-foreground leading-7">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}