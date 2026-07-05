"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navigation } from "@/data/navigation";
import { social } from "@/data/social";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "GitHub",
    href: social.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: social.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: `mailto:${social.email}`,
    icon: Mail,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/40 bg-background/60 backdrop-blur">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.08] dark:opacity-[0.04]" />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="#home"
              className="inline-block text-2xl font-black tracking-tight transition-opacity hover:opacity-80"
            >
              <span className="text-primary">S</span>aad Safwat
            </a>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Full Stack Web Developer building scalable applications with
              Laravel, Node.js, React, and Next.js.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="rounded-xl border border-border/60 p-2.5 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${social.email}`}
                className="block transition hover:text-primary"
              >
                {social.email}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saad Safwat. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <span className="font-medium text-primary">Next.js</span>
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition",
                "hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              )}
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
