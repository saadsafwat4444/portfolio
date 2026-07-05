"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { navigation } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItem from "./NavItem";
import Logo from "./Logo";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const sectionIds = navigation.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        type="button"
        aria-label="Open navigation menu"
        className="rounded-full p-2 transition hover:bg-accent md:hidden"
      >
        <Menu size={20} />
      </SheetTrigger>

      <SheetContent side="right" className="flex w-[min(100vw-2rem,320px)] flex-col">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        <div className="pt-2">
          <Logo onNavigate={close} />
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {navigation.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onNavigate={close}
              mobile
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
