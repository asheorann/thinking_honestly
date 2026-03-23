import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllQuestions, getQuestionBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/MDXComponents";

export async function generateStaticParams() {
  const questions = getAllQuestions();
  return questions.map((question) => ({
    slug: question.slug,
  }));
}

export default function QuestionPage({ params }: { params: { slug: string } }) {
  const question = getQuestionBySlug(params.slug);

  if (!question) {
    notFound();
  }

  const { frontmatter, content } = question;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedUpdated = frontmatter.updated
    ? new Date(frontmatter.updated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const showUpdated = frontmatter.updated && frontmatter.updated !== frontmatter.date;

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <Link
        href="/questions"
        className="text-accent hover:underline inline-flex items-center mb-8"
      >
        ← back to questions
      </Link>

      <article className="prose-custom">
        <h1 className="font-serif-display text-4xl text-heading mb-4">
          {frontmatter.title}
        </h1>

        <div className="flex items-center flex-wrap gap-3 mb-12 text-sm text-accent">
          {/* Status indicator */}
          <span className="flex items-center gap-1.5">
            {frontmatter.status === "open" ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" fill="currentColor" />
              </svg>
            )}
            {frontmatter.status}
          </span>

          <span>•</span>

          {/* Date written */}
          <time dateTime={frontmatter.date}>{formattedDate}</time>

          {/* Updated date if different */}
          {showUpdated && (
            <>
              <span>•</span>
              <span>updated {formattedUpdated}</span>
            </>
          )}

          {/* Revision */}
          <span>•</span>
          <span>rev. {frontmatter.revision}</span>

          {/* Category */}
          <span>•</span>
          <span>{frontmatter.category}</span>

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-2">
                {frontmatter.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </>
          )}
        </div>

        <div
          className={`max-w-[65ch] text-body text-base leading-[1.8] ${
            frontmatter.language === "hi" ? "font-hind" : ""
          }`}
        >
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
