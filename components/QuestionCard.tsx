import Link from "next/link";
import { Question } from "@/lib/mdx";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const { slug, frontmatter } = question;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="pb-8 border-b border-border">
      <Link href={`/questions/${slug}`}>
        <h2 className="font-serif-display text-2xl text-heading mb-2 hover:text-accent transition-colors">
          {frontmatter.title}
        </h2>
      </Link>

      <div className="flex items-center gap-4 mb-3 text-sm text-accent">
        <time dateTime={frontmatter.date}>{formattedDate}</time>
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex gap-2">
            {frontmatter.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )}
      </div>

      <p className="text-body leading-relaxed">{frontmatter.summary}</p>
    </article>
  );
}
