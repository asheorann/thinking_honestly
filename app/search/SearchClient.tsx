"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { SearchableQuestion } from "@/lib/search";

interface SearchClientProps {
  questions: SearchableQuestion[];
}

export default function SearchClient({ questions }: SearchClientProps) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(questions, {
        keys: ["title", "summary", "tags"],
        threshold: 0.3,
        includeScore: true,
      }),
    [questions]
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((result) => result.item);
  }, [query, fuse]);

  const formattedDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="font-serif-display text-4xl text-heading mb-8">Search</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search questions..."
        className="w-full px-4 py-3 mb-12 bg-background text-body border border-border focus:border-accent focus:outline-none"
      />

      {query.trim() && results.length === 0 && (
        <p className="text-body opacity-60">No questions found</p>
      )}

      {results.length > 0 && (
        <div className="space-y-8">
          {results.map((result) => (
            <article key={result.slug} className="pb-8 border-b border-border">
              <Link href={`/questions/${result.slug}`}>
                <h2 className="font-serif-display text-2xl text-heading mb-2 hover:text-accent transition-colors">
                  {result.title}
                </h2>
              </Link>

              <div className="flex items-center gap-4 mb-3 text-sm text-accent">
                <time dateTime={result.date}>{formattedDate(result.date)}</time>
                {result.tags && result.tags.length > 0 && (
                  <div className="flex gap-2">
                    {result.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-body leading-relaxed">{result.summary}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
