import fs from "fs";
import path from "path";
import matter from "gray-matter";

const questionsDirectory = path.join(process.cwd(), "content/questions");
const bigQuestionsDirectory = path.join(process.cwd(), "content/big-questions");

export interface QuestionFrontmatter {
  title: string;
  date: string;
  updated?: string;
  tags: string[];
  category: "mind" | "cosmos" | "society" | "language" | "mathematics" | "finance" | "misc";
  language: "en" | "hi";
  status: "open" | "closed";
  revision: number;
  summary: string;
}

export interface Question {
  slug: string;
  frontmatter: QuestionFrontmatter;
  content: string;
}

export function getAllQuestions(): Question[] {
  if (!fs.existsSync(questionsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(questionsDirectory);
  const questions = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(questionsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as QuestionFrontmatter,
        content,
      };
    });

  questions.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  return questions;
}

export function getQuestionBySlug(slug: string): Question | null {
  if (!fs.existsSync(questionsDirectory)) {
    return null;
  }

  try {
    const fullPath = path.join(questionsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as QuestionFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export function getQuestionsByCategory(category: string): Question[] {
  const allQuestions = getAllQuestions();
  return allQuestions.filter((q) => q.frontmatter.category === category);
}

export function getAllCategories(): string[] {
  const questions = getAllQuestions();
  const categories = new Set(questions.map((q) => q.frontmatter.category));
  return Array.from(categories).sort();
}

// Big Questions

export interface BigQuestionFrontmatter {
  title: string;
  description: string;
  status: "active" | "paused" | "resolved";
  topOfMind: string[];
  timeline: Array<{ date: string; input: string }>;
}

export interface BigQuestion {
  slug: string;
  frontmatter: BigQuestionFrontmatter;
  content: string;
}

export interface ThinkingFrontmatter {
  title: string;
  parentQuestion: string;
  date: string;
  tags: string[];
  summary: string;
  source?: string;
}

export interface Thinking {
  slug: string;
  frontmatter: ThinkingFrontmatter;
  content: string;
}

export function getBigQuestion(slug: string): BigQuestion | null {
  if (!fs.existsSync(bigQuestionsDirectory)) {
    return null;
  }

  try {
    const indexPath = path.join(bigQuestionsDirectory, slug, "index.mdx");
    const fileContents = fs.readFileSync(indexPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as BigQuestionFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export function getThinkings(bigQuestionSlug: string): Thinking[] {
  if (!fs.existsSync(bigQuestionsDirectory)) {
    return [];
  }

  try {
    const questionDir = path.join(bigQuestionsDirectory, bigQuestionSlug);
    const fileNames = fs.readdirSync(questionDir);

    const thinkings = fileNames
      .filter((fileName) => fileName.endsWith(".mdx") && fileName !== "index.mdx")
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(questionDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          frontmatter: data as ThinkingFrontmatter,
          content,
        };
      });

    thinkings.sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });

    return thinkings;
  } catch {
    return [];
  }
}

export function getThinking(bigQuestionSlug: string, thinkingSlug: string): Thinking | null {
  if (!fs.existsSync(bigQuestionsDirectory)) {
    return null;
  }

  try {
    const fullPath = path.join(bigQuestionsDirectory, bigQuestionSlug, `${thinkingSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: thinkingSlug,
      frontmatter: data as ThinkingFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}
