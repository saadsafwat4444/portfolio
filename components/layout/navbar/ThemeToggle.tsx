"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {!mounted ? (
        <span className="h-5 w-5" aria-hidden="true" />
      ) : resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}