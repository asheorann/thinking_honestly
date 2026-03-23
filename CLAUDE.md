# Project: Personal Website

## What this is
A personal site where I post answers to open questions I find interesting.
Tone is thoughtful, curious, essayish — not a portfolio, not a blog, not a startup.
The vibe is: a smart person's notebook made public.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS v3
- MDX for content via next-mdx-remote
- gray-matter for frontmatter parsing
- Deployed on Vercel

## Typography
- Headings: DM Serif Display (Google Fonts, weight 400 only)
- Body: system sans stack — ui-sans-serif, system-ui, -apple-system, sans-serif
- Body font size: 16px, line-height: 1.8
- Max reading width: 65ch
- Never use Inter, Geist, or any other imported sans font

## Color — Light mode
- Background: #FAF8F3
- Surface (cards, subtle bg): #F0EBE1
- Heading text: #1A1814
- Body text: #2C2A25
- Accent (dates, tags, metadata, links): #8C7355
- Border: #E0D8CC

## Color — Dark mode
- Background: #1C1A16
- Surface: #252219
- Heading text: #F0EBE1
- Body text: #D4CDBF
- Accent: #A89070
- Border: #3A352C

## Light/dark mode
- Toggle button in nav, top right
- Uses next-themes for state management
- No flash on load (next-themes handles this)
- Default: system preference

## Design rules — strictly follow these
- No pure white (#FFF) or pure black (#000) anywhere
- No blue accent color anywhere
- No rounded pill buttons
- No card shadows — use subtle borders instead (0.5px or 1px)
- No animations or transitions except the theme toggle
- No comment sections, no like buttons, no share buttons
- No sidebar
- Lots of whitespace — padding is generous

## Folder structure
content/
  questions/
    *.mdx          ← all essay content lives here

app/
  page.tsx         ← homepage: name, one-line description, list of recent questions
  layout.tsx       ← global layout: nav, theme provider, fonts
  questions/
    page.tsx       ← full list of all questions, sorted by date
    [slug]/
      page.tsx     ← individual question page

components/
  Nav.tsx          ← minimal nav: site name left, dark mode toggle right
  QuestionCard.tsx ← used on index — shows title, date, one-line summary
  MDXComponents.tsx ← custom MDX component overrides (typography styles)

## MDX frontmatter shape
---
title: "Why does anything exist?"
date: "2026-03-22"
tags: ["philosophy", "cosmology"]
summary: "A one sentence teaser shown on the index page."
---

## What I do NOT want
- No database, no Supabase, no Algolia — flat MDX files only for now
- No authentication
- No comments
- No newsletter/email capture
- No page transitions or Framer Motion
- No TypeScript errors left unresolved
- No placeholder Lorem Ipsum content — use the sample question below

## Sample MDX file to create
Create this file at content/questions/why-does-anything-exist.mdx:

---
title: "Why does anything exist?"
date: "2026-03-22"
tags: ["philosophy", "cosmology"]
summary: "The question Leibniz asked that nobody has satisfactorily answered since."
---

I've been sitting with this question for months. The more I read — Leibniz, Parfit, Krauss — the more I find myself circling back to the same uncomfortable edge. The place where explanation runs out and something stranger begins.

Here's what I've found so far:

- Leibniz's framing remains unanswered — "why is there something rather than nothing" presupposes nothing is simpler, but is it?
- Quantum vacuum fluctuations don't escape the puzzle. A vacuum with physical laws is still something.
- The most honest answer might just be: we don't know, and that's okay to sit with.

More soon.
```