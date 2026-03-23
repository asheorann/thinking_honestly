import Link from "next/link";
import { getAllQuestions, getAllCategories } from "@/lib/mdx";
import QuestionCard from "@/components/QuestionCard";

export default function QuestionsPage() {
  const questions = getAllQuestions();
  const categories = getAllCategories();

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="font-serif-display text-4xl text-heading mb-8">
        All Questions
      </h1>

      {categories.length > 0 && (
        <nav className="mb-12 flex gap-4 flex-wrap text-accent">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/questions/category/${category}`}
              className="hover:underline capitalize"
            >
              {category}
            </Link>
          ))}
        </nav>
      )}

      <div className="space-y-8">
        {questions.map((question) => (
          <QuestionCard key={question.slug} question={question} />
        ))}
      </div>

      {questions.length === 0 && (
        <p className="text-body">No questions yet.</p>
      )}
    </main>
  );
}
