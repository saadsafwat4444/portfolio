"use client";

import { navigation } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavItem from "./NavItem";

export default function NavLinks() {
  const sectionIds = navigation.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="absolute left-1/2 top-1/2 hidden max-w-[min(100%-7rem,52rem)] -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 overflow-x-auto [scrollbar-width:none] md:flex [&::-webkit-scrollbar]:hidden">
      {navigation.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isActive={activeSection === item.id}
        />
      ))}
    </nav>
  );
}
