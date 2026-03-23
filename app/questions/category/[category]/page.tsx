import { notFound } from "next/navigation";
import { getAllCategories, getQuestionsByCategory } from "@/lib/mdx";
import QuestionCard from "@/components/QuestionCard";

const validCategories = ["mind", "cosmos", "society", "language", "mathematics", "misc"];

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  if (!validCategories.includes(params.category)) {
    notFound();
  }

  const questions = getQuestionsByCategory(params.category);

  return (
    <main className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="font-serif-display text-4xl text-heading mb-12 capitalize">
        {params.category}
      </h1>

      <div className="space-y-8">
        {questions.map((question) => (
          <QuestionCard key={question.slug} question={question} />
        ))}
      </div>

      {questions.length === 0 && (
        <p className="text-body">No questions in this category yet.</p>
      )}
    </main>
  );
}
