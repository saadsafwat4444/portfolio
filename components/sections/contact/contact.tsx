"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { social } from "@/data/social";
import { getMailtoHref, openEmailClient } from "@/lib/email";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.2] dark:opacity-[0.1]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black lg:text-5xl">
            Get In Touch 📩
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Let’s work together or discuss opportunities
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl border bg-background/60 backdrop-blur p-8"
        >

          {/* Email */}
          <div className="flex items-center justify-between flex-wrap gap-4">

            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <a
                href={getMailtoHref()}
                className="text-muted-foreground transition hover:text-primary"
              >
                {social.email}
              </a>
            </div>

            <Button
              type="button"
              size="lg"
              className="gap-2"
              onClick={() => openEmailClient()}
            >
              Send Email
              <Send size={16} />
            </Button>
          </div>

          {/* Social */}
          <div className="mt-8 flex items-center gap-4">

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-3 rounded-xl border hover:border-primary transition hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-3 rounded-xl border hover:border-primary transition hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}