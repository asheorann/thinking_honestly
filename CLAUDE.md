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

## Notebook aesthetic
The site should feel like a clean, organized personal notebook:
- Navigation is minimal — like tabs on notebook dividers
- Content is categorized but not overwhelming
- Easy to scan, easy to find specific thoughts
- Timeline component has a hand-drawn, sketchy feel (horizontal line with dots)
- Top of mind section uses dash bullets (—) like handwritten notes
- Cards/containers have subtle borders, no shadows
- Typography is comfortable for long reading sessions

## Content structure

### Two types of content:

1. **Questions** — one-off essays on interesting questions
2. **Big Questions** — ongoing investigations with timeline + top of mind

### Folder structure
content/
  questions/
    *.mdx          ← standalone question essays
  big-questions/
    ai-safety/
      index.mdx    ← overview with timeline + top of mind
      *.mdx        ← individual thinkings/frameworks

app/
  page.tsx         ← homepage: name, one-line description, list of recent questions + big questions tabs
  layout.tsx       ← global layout: nav, theme provider, fonts
  questions/
    page.tsx       ← full list of all questions, sorted by date
    [slug]/
      page.tsx     ← individual question page
  big-questions/
    page.tsx       ← list of all big questions
    [slug]/
      page.tsx     ← big question overview (with timeline + top of mind)
      [thinking]/
        page.tsx   ← individual thinking/framework

components/
  Nav.tsx          ← minimal nav: site name left, dark mode toggle right
  QuestionCard.tsx ← used on index — shows title, date, one-line summary
  Timeline.tsx     ← visual timeline for big questions
  TopOfMind.tsx    ← key thoughts/open questions/todos section
  MDXComponents.tsx ← custom MDX component overrides (typography styles)

## MDX frontmatter shapes

### For Questions:
---
title: "Why does anything exist?"
date: "2026-03-22"
tags: ["philosophy", "cosmology"]
summary: "A one sentence teaser shown on the index page."
---

### For Big Questions (index.mdx):
---
title: "AI Safety"
description: "Ongoing investigation into alignment, safety, and governance questions"
status: "active"  # active, paused, resolved
topOfMind:
  - "How do we measure capability vs alignment progress?"
  - "What does 'interpretability' actually buy us?"
  - "To do: map out deceptive alignment scenarios"
timeline:
  - date: "2026-05-10"
    input: "Read Anthropic's RSP framework"
  - date: "2026-04-28"
    input: "Conversation with researcher about mesa-optimization"
  - date: "2026-04-15"
    input: "Ajeya Cotra's timelines report"
---

### For Big Question Thinkings:
---
title: "Deceptive alignment is the default outcome"
parentQuestion: "ai-safety"
date: "2026-05-11"
tags: ["alignment", "mesa-optimization"]
summary: "Why models might learn to game our training procedures by default"
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