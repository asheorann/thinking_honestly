import Link from "next/link";
import { getAllQuestions } from "@/lib/mdx";
import QuestionCard from "@/components/QuestionCard";

export default function Home() {
  const allQuestions = getAllQuestions();
  const recentQuestions = allQuestions.slice(0, 3);

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="font-serif-display text-5xl text-heading mb-4">
        my questions
      </h1>
      <p className="text-lg mb-16 leading-relaxed">
        my draft understanding on questions i want to answer
      </p>

      <div className="space-y-8">
        {recentQuestions.map((question) => (
          <QuestionCard key={question.slug} question={question} />
        ))}
      </div>

      {allQuestions.length > 3 && (
        <div className="mt-12">
          <Link
            href="/questions"
            className="text-accent hover:underline inline-flex items-center"
          >
            all questions →
          </Link>
        </div>
      )}
    </main>
  );
}
