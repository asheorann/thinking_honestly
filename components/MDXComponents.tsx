import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-serif-display text-4xl text-heading mb-6 mt-12">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-serif-display text-3xl text-heading mb-4 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif-display text-2xl text-heading mb-3 mt-8">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 leading-[1.8] text-body">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 space-y-3 list-disc pl-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 space-y-3 list-decimal pl-6">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-[1.8] text-body">
      {children}
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent no-underline hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-accent pl-6 my-6 italic text-body">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-surface px-2 py-1 rounded text-sm font-mono text-heading">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-surface p-4 rounded overflow-x-auto mb-6">
      {children}
    </pre>
  ),
};
