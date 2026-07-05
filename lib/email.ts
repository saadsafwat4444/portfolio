import { social } from "@/data/social";

const DEFAULT_SUBJECT = "Portfolio Contact";

export function getMailtoHref(subject = DEFAULT_SUBJECT) {
  return `mailto:${social.email}?subject=${encodeURIComponent(subject)}`;
}

export function getGmailComposeHref(subject = DEFAULT_SUBJECT) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: social.email,
    su: subject,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function openEmailClient(subject = DEFAULT_SUBJECT) {
  if (typeof window === "undefined") return;

  window.open(getGmailComposeHref(subject), "_blank", "noopener,noreferrer");
}
