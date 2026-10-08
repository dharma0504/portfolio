"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleThemeChange = (e: CustomEvent<"light" | "dark">) => {
      setTheme(e.detail);
    };

    window.addEventListener("portfolio-theme-change" as any, handleThemeChange);
    return () => {
      window.removeEventListener("portfolio-theme-change" as any, handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (e) {
      // ignore
    }

    window.dispatchEvent(
      new CustomEvent("portfolio-theme-change", { detail: nextTheme })
    );
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={
          className ||
          "w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] flex items-center justify-center text-[var(--ca-ink)] shrink-0"
        }
      >
        <Moon className="w-3.5 h-3.5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={
        className ||
        "w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] flex items-center justify-center text-[var(--ca-ink)] hover:bg-[var(--ca-yellow)] transition-transform hover:-translate-y-0.5 shrink-0 cursor-pointer shadow-xs"
      }
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-[var(--ca-yellow)] animate-in spin-in-180 duration-200" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[var(--ca-ink)] animate-in spin-in-180 duration-200" />
      )}
      {showLabel && (
        <span className="ml-2 font-ca-mono text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]">
          {isDark ? "LIGHT MODE" : "DARK MODE"}
        </span>
      )}
    </button>
  );
}
