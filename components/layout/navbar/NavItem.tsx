"use client";

import { cn } from "@/lib/utils";

type NavItemProps = {
  item: {
    id: string;
    label: string;
    href: string;
  };
  isActive?: boolean;
  onNavigate?: () => void;
  mobile?: boolean;
};

export default function NavItem({
  item,
  isActive,
  onNavigate,
  mobile,
}: NavItemProps) {
  return (
    <a
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "relative shrink-0 px-2 py-1.5 text-xs font-medium transition-colors duration-300 sm:px-2.5 sm:text-sm",
        mobile ? "rounded-xl" : "rounded-full",
        isActive
          ? mobile
            ? "bg-primary/10 text-primary"
            : "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {item.label}
      {!mobile && (
        <span
          className={cn(
            "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300 sm:inset-x-2.5",
            isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          )}
        />
      )}
    </a>
  );
}
