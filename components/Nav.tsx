"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="py-6 px-8 flex items-center justify-between">
      <Link href="/" className="text-heading font-serif-display text-xl">
        Thinking Honestly
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/search" className="text-accent hover:text-heading transition-colors">
          search
        </Link>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-accent hover:text-heading transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="5" fill="currentColor" />
              <line x1="10" y1="1" x2="10" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="10" y1="17" x2="10" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="1" y1="10" x2="3" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3.5" y1="3.5" x2="4.91421" y2="4.91421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="15.0858" y1="15.0858" x2="16.5" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3.5" y1="16.5" x2="4.91421" y2="15.0858" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="15.0858" y1="4.91421" x2="16.5" y2="3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 11.5C16.3 13.5 14 15 11 15C7 15 4 12 4 8C4 5.5 5.5 3.5 7.5 2.5C4 3 1.5 6 1.5 9.5C1.5 14 5 17.5 9.5 17.5C13 17.5 16 15 17.5 11.5Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
