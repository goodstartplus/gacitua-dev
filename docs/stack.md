# Stack Definition — gacitua.dev

## Purpose

This document defines the recommended technical stack for `gacitua.dev` and explains how the project should be structured.

The goal is not only to choose technologies, but to establish a clear implementation direction so that an AI agent or developer can build the site consistently.

This website is a bilingual personal/professional portfolio for André Gacitua, focused on showcasing real projects, technical background, and product-building experience.

The site should be:

- fast
- visually polished
- easy to maintain
- scalable as new projects are added
- suitable for bilingual content
- capable of supporting light interaction such as modals, filters, and UI state

---

## Recommended Stack

The recommended stack for this project is:

- **Astro**
- **TypeScript**
- **Tailwind CSS**
- **Astro Content Collections**
- **MDX**
- **React (only for isolated interactive components)**
- **Cloudflare Pages** for deployment

This stack is intentionally chosen to balance:

- performance
- maintainability
- content structure
- design flexibility
- low complexity
- future scalability

---

## Why This Stack

## 1. Astro as the main framework

Astro should be the core framework of the project.

Reasons:

- excellent for content-oriented websites
- produces very fast pages
- avoids unnecessary client-side JavaScript by default
- supports static and hybrid rendering patterns
- works well with component-based design
- supports MDX and Content Collections natively
- allows React components only where interactivity is needed

This project is mostly a content-and-showcase site, not a heavy web app, so Astro is a better fit than a more app-oriented framework.

---

## 2. TypeScript for consistency and maintainability

TypeScript should be used across the project.

Reasons:

- improves clarity for an AI agent or human developer
- reduces ambiguity in data structures
- helps define project content schemas
- makes component props and project metadata more reliable
- improves long-term maintainability

All components, content schemas, and utility logic should use TypeScript.

---

## 3. Tailwind CSS for styling

Tailwind CSS should be the main styling system.

Reasons:

- fast UI implementation
- easy to maintain consistent spacing, typography, and visual rhythm
- works well for a monochromatic design system
- suitable for responsive layout work
- ideal for building custom UI without relying on prebuilt component libraries
- makes it easy to recreate the “Instagram-inspired but premium” visual direction

This project should not depend on a heavy UI framework.

Custom styling should be intentional and closely aligned with the visual identity of the site.

---

## 4. Content Collections for structured project content

Astro Content Collections should be used for storing and validating project data.

Reasons:

- projects need structured metadata
- the site will likely grow over time
- bilingual content needs consistent organization
- the homepage grid, modal previews, and project pages will all depend on reliable content models

Projects should not be hardcoded directly into components.

They should be stored as content entries with a defined schema.

---

## 5. MDX for project detail pages

Project detail pages should be written in MDX.

Reasons:

- allows rich project descriptions with flexible formatting
- supports text, headings, lists, images, and embedded components
- ideal for case-study-like project pages
- gives André a manageable way to update project pages over time

Use MDX for long-form internal project pages.

Use frontmatter + content schema for structured project metadata.

---

## 6. React only where interactivity is necessary

React should not be the foundation of the entire site.

React should be used only for isolated interactive UI elements.

Examples of appropriate use cases:

- project modal
- project filters
- interactive tabs
- language toggle UI state
- lightweight gallery interactions
- client-side animation/stateful microinteractions

Reasons:

- keeps the site lightweight
- avoids unnecessary client-side complexity
- preserves Astro’s performance advantages
- allows richer interaction only where useful

This should follow an “islands architecture” mindset:
**use JavaScript only where interaction is actually needed.**

---

## 7. Cloudflare Pages for deployment

The project should be deployed on Cloudflare Pages.

Reasons:

- good fit for Astro
- simple deployment workflow
- strong global performance
- easy integration with domains and DNS
- aligned with André’s existing familiarity with the Cloudflare ecosystem

This project does not require a custom backend at this stage, so Cloudflare Pages is enough for the initial version.

---

# Architecture Guidelines

## General architecture

The site should be built primarily as a content-driven frontend site with light interactive behavior.

This is **not** a dashboard, SaaS app, or highly dynamic client-heavy application.

The architecture should prioritize:

- static content generation where possible
- minimal JavaScript
- reusable layout/components
- structured content
- easy addition of new projects
- clear bilingual routing

---

## Rendering strategy

Prefer static generation for most pages.

Examples of pages that should be static:

- homepage
- about page
- stack/toolbox page
- project detail pages
- category or archive pages

Interactive pieces such as modals can still run on the client where needed.

Do not introduce SSR or server complexity unless a real need emerges later.

---

# Content Strategy and Data Model

## Projects should be content entries

Each project should be stored as a structured content item, not as inline hardcoded UI data.

A project entry should include metadata such as:

- `title`
- `slug`
- `language`
- `type`
- `status`
- `summary`
- `shortDescription`
- `tags`
- `stack`
- `coverImage`
- `gallery`
- `externalUrl`
- `featured`
- `order`
- `year`
- `clientOrPersonal`
- `draft`

The exact schema can evolve, but structured content is required from the start.

---

## Suggested content organization

A recommended structure is:

- one collection for `projects`
- bilingual entries separated by language
- project-specific MDX files with frontmatter
- reusable utility functions to query content by language, type, featured status, etc.

Possible content patterns:

### Option A — separate entry per language
Example:
- `goodstart-plus.en.mdx`
- `goodstart-plus.pt.mdx`

### Option B — one base entry with localized fields
This is possible, but usually less clean for long-form project pages.

For this project, **separate MDX files per language** is likely the clearest option.

---

# Internationalization Strategy

The site should support both:

- Portuguese
- English

This should be handled through **route-based internationalization**, not by relying only on runtime translation widgets.

Recommended structure:

- `/en/...`
- `/pt/...`

or a default-locale structure with explicit locale support.

The important point is that the architecture should treat bilingual content as a first-class concern.

The AI agent implementing the project should make sure:

- navigation supports both languages
- project pages exist in both languages where applicable
- content queries are locale-aware
- UI labels are translatable
- the homepage can switch languages cleanly

---

# Component Strategy

## Use Astro components for most UI

Most of the website should be built with Astro components.

Examples:

- layout wrappers
- profile header
- stats row
- highlights navigation
- project grid shell
- project card structure
- footer
- content sections
- project detail layout

---

## Use React components only for interactive parts

Use React only where stateful interaction is clearly beneficial.

Likely React components:

- `ProjectModal`
- `ProjectGridFilter`
- `LanguageToggle` (optional, depending on implementation)
- `ImageGallery` (optional)
- possibly small animated UI widgets if needed

These should be mounted as client islands.

Do not build the whole page in React unless there is a strong architectural reason.

---

# Styling Principles

## Visual direction

The design should be:

- monochromatic or near-monochromatic
- minimal
- elegant
- personal
- modern
- inspired by social profile interfaces
- clearly custom, not template-like

## Important note
The homepage can be strongly inspired by Instagram profile UX patterns, but should not feel like a direct clone.

The styling should reinterpret the structure using a more premium and restrained visual language.

---

## Tailwind usage rules

Tailwind should be used with discipline.

The AI agent should:

- define reusable spacing and typography patterns
- avoid random class clutter when possible
- extract repeated patterns into components
- use consistent layout widths and responsive behavior
- define a clear design token style through Tailwind config if needed

Avoid visual inconsistency caused by overly ad hoc utility usage.

---

# Suggested Project Structure

A reasonable directory structure could look like this:

```txt
src/
  components/
    astro/
    react/
  content/
    projects/
      en/
      pt/
  layouts/
  pages/
    index.astro
    en/
    pt/
    projects/
  styles/
  utils/
  data/



  Possible component grouping:

  src/components/astro/
  ProfileHeader.astro
  ProfileStats.astro
  HighlightsNav.astro
  ProjectGrid.astro
  ProjectCard.astro
  SectionTitle.astro
  Footer.astro

  src/components/react/
  ProjectModal.tsx
  ProjectFilter.tsx
  LanguageToggle.tsx


  Possible layout grouping:

  src/layouts/
  BaseLayout.astro
  ProjectLayout.astro


  Possible utility grouping:

  src/utils/
  getProjects.ts
  getFeaturedProjects.ts
  getProjectsByLocale.ts
  getProjectBySlug.ts
  i18n.ts



  Modal and Project Navigation Strategy

The homepage project grid should support this interaction model:

On click

When the user clicks a project tile:

open a modal first
show a quick project summary
show two actions:
Visit Site
See More Details
Why this matters

This keeps the browsing experience visual and lightweight while still allowing depth.

The modal should not replace full project pages.
It should serve as a preview layer.

Therefore, the stack must support:

fast client-side modal state
project metadata availability in the grid
internal project routes for full pages
external links where applicable

This is another reason Astro + content entries + React islands is a good fit.

Performance Rules

This project should remain lightweight.

The AI agent building it should follow these principles:

avoid unnecessary client-side hydration
optimize images
keep the homepage fast even with multiple project thumbnails
lazy-load noncritical images if needed
use React only for interactive islands
do not introduce large client-side state management unless truly needed

The site should feel fast and polished.

What Should Not Be Added at the Start

The following should be avoided unless there is a clear future need:

full CMS integration
database
authentication
heavy animation libraries everywhere
unnecessary SSR
global React app architecture
admin dashboard
overly complex i18n abstraction
overengineered API layer

Version 1 should stay focused and elegant.

Future-Friendly Extensions

The stack should still allow future additions such as:

notes or lab section
timeline page
experiments archive
search/filter improvements
analytics
theme mode
richer multilingual support
headless CMS migration later if desired

The initial stack does not block these future enhancements.

Final Recommendation

The official recommended stack for gacitua.dev is:

Astro for the main site framework
TypeScript for type safety and maintainability
Tailwind CSS for custom UI styling
Astro Content Collections for structured content
MDX for project detail pages
React islands for the project modal and other isolated interactions
Cloudflare Pages for deployment

This stack best supports the project vision:

visual portfolio/profile website
bilingual structure
content scalability
premium design flexibility
strong performance
simple maintenance
low unnecessary complexity
Instruction for the AI Agent

When implementing this project, follow these rules:

Use Astro as the primary framework.
Use TypeScript everywhere possible.
Use Tailwind for styling.
Store projects as structured content entries.
Use MDX for full internal project pages.
Use React only for isolated interactivity such as modals and filters.
Organize the codebase for bilingual routing from the beginning.
Prioritize performance and low JavaScript.
Do not overengineer version 1.
Build the architecture so that new projects can be added easily over time.

The final implementation should feel like a high-quality, bilingual, Instagram-inspired portfolio/profile website for a product-oriented developer and builder.