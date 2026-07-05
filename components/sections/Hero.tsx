"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Mouse,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
  

import { FaGithub, FaLinkedin } from "react-icons/fa";
import CodeCard from "./CodeCard";
import { Button } from "@/components/ui/button";
import { social } from "@/data/social";
import { getMailtoHref } from "@/lib/email";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const techs = [
  "Laravel",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.35] dark:opacity-[0.12]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/15 blur-[140px] dark:bg-primary/20" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent blur-[160px] opacity-60 dark:opacity-40" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <div className="space-y-7">

          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: .4 }}
            className="inline-flex rounded-full border bg-background/60 px-4 py-2 text-sm backdrop-blur"
          >
            👋 Hello, I&apos;m
          </motion.span>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: .1 }}
          >
            <h1 className="text-5xl font-black tracking-tight lg:text-7xl">
              Saad Safwat
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-primary">
              Full Stack Web Developer
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            className="max-w-xl text-lg leading-8 text-muted-foreground"
          >
            I build scalable web applications using Laravel, Node.js,
            React and Next.js with clean architecture, RESTful APIs,
            authentication systems and modern UI experiences.
          </motion.p>

          {/* Tech */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className="flex flex-wrap gap-3"
          >
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur transition hover:border-primary hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: .4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group"
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </Button>

           <Button
  asChild
  variant="outline"
  size="lg"
>
  <a
    href="/Saad-Safwat-CV.pdf"
    download
  >
    Download CV
    <Download className="ml-2 h-4 w-4" />
  </a>
</Button>
          </motion.div>

          {/* Social */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: .5 }}
            className="flex items-center gap-4"
          >
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border p-3 transition hover:border-primary hover:text-primary hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border p-3 transition hover:border-primary hover:text-primary hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href={getMailtoHref()}
              aria-label="Send email"
              className="rounded-full border p-3 transition hover:border-primary hover:text-primary hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
          }}
          transition={{
            duration: .8,
            y: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center lg:justify-end"
        >
          <CodeCard />

          {/* <div className="relative">
  <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />

  <CodeCard />
</div> */}
        </motion.div>
      </div>

    

      
    </section>
     
  );
}