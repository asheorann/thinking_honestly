import { getAllQuestions } from "./mdx";

export interface SearchableQuestion {
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  category: string;
  date: string;
}

export function getSearchableQuestions(): SearchableQuestion[] {
  const questions = getAllQuestions();

  return questions.map((q) => ({
    title: q.frontmatter.title,
    summary: q.frontmatter.summary,
    slug: q.slug,
    tags: q.frontmatter.tags,
    category: q.frontmatter.category,
    date: q.frontmatter.date,
  }));
}
