"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SideNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <aside className="w-[200px] bg-background border-r border-border sticky top-0 h-screen flex flex-col py-10 md:flex hidden">
      <Link href="/" className="font-serif-display text-2xl text-heading px-6 pb-10">
        Anush
      </Link>

      <nav className="flex flex-col gap-0.5 flex-1">
        <Link
          href="/"
          className={`px-6 py-4 text-[0.95rem] border-r-[3px] transition-all ${
            isActive("/") && pathname === "/"
              ? "text-heading bg-surface border-accent font-medium"
              : "text-accent border-transparent hover:bg-surface"
          }`}
        >
          Home
        </Link>

        <Link
          href="/big-questions/ai-safety"
          className={`px-6 py-4 text-[0.95rem] border-r-[3px] transition-all ${
            isActive("/big-questions/ai-safety")
              ? "text-heading bg-surface border-accent font-medium"
              : "text-accent border-transparent hover:bg-surface"
          }`}
        >
          AI Safety
        </Link>

        <Link
          href="/questions"
          className={`px-6 py-4 text-[0.95rem] border-r-[3px] transition-all ${
            isActive("/questions") && !pathname.includes("/big-questions")
              ? "text-heading bg-surface border-accent font-medium"
              : "text-accent border-transparent hover:bg-surface"
          }`}
        >
          All Questions
        </Link>
      </nav>

      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-6 py-4 text-accent text-[0.9rem] text-left hover:text-heading transition-colors"
        >
          {theme === "dark" ? "☀ Light mode" : "☾ Dark mode"}
        </button>
      )}
    </aside>
  );
}
