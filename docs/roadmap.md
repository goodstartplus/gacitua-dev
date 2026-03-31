# Roadmap — gacitua.dev

## Purpose

This roadmap defines the recommended implementation sequence for `gacitua.dev`.

It is written to help an AI agent or developer build the project in a logical order, avoiding unnecessary complexity in version 1.

The roadmap is organized in phases so that the project can move from foundation → working MVP → polish → future enhancements.

The main goal is to ship a strong first version quickly, while keeping the codebase scalable for future growth.

---

## Product Summary

`gacitua.dev` is a bilingual personal/professional website for André Gacitua.

It should present André as a builder of real digital products and systems, not as a job seeker.

The website should be visually inspired by an Instagram profile layout, while still feeling premium, monochromatic, intentional, and professional.

Core ideas of the site:

- profile-style homepage
- project grid inspired by Instagram
- project modal previews
- full internal project pages
- bilingual support
- structured content system
- highly visual but lightweight browsing experience

---

## Roadmap Philosophy

The project should be built in this order:

1. establish the technical foundation
2. define the content model
3. build the homepage structure
4. build the project browsing experience
5. build the project detail pages
6. add bilingual support
7. polish the design and UX
8. deploy and validate
9. expand later only if needed

This roadmap intentionally avoids overengineering in the first release.

---

## Implementation Status Update

Current implementation progress in this repository:

- [x] Astro project initialized in the repository root
- [x] TypeScript strict base enabled
- [x] MDX configured
- [x] React integration added for future islands
- [x] Cloudflare adapter configured
- [x] Tailwind v4 integrated through Vite
- [x] Global base layout created
- [x] Global stylesheet initialized
- [x] Content Collections configured
- [x] Bilingual seed project entries added (`en` and `pt`)
- [x] Project query utilities created
- [x] Initial localized landing pages created at `/en/` and `/pt/`
- [ ] Homepage MVP implementation completed
- [ ] Project modal preview implemented
- [ ] Full project detail pages implemented
- [ ] Additional supporting pages implemented
- [ ] Production deployment and QA completed

---

# Phase 0 — Project Foundation

## Goal

Create the project foundation and lock in the architecture before building UI.

## Deliverables

- Astro project initialized
- TypeScript enabled
- Tailwind configured
- MDX configured
- Content Collections configured
- basic folder structure created
- base layout in place
- global styles initialized
- deployment target prepared for Cloudflare Pages

## Status

**In progress — mostly completed in this repository.**

Completed so far:

- Astro initialized in the repository root
- strict TypeScript base in place
- MDX integration added
- React integration added
- Cloudflare adapter configured
- Tailwind v4 connected through Vite
- base layout created
- global stylesheet created
- initial localized routes created

Remaining for this phase:

- refine folder structure further as components/pages grow
- optionally add Cloudflare bindings/config files when deployment setup begins

## Tasks

### 0.1 Initialize the project
Create the Astro project using TypeScript.

### 0.2 Install and configure dependencies
Set up:

- Tailwind CSS
- MDX support
- React integration for islands
- content collections support
- any necessary image/content tooling

### 0.3 Create the initial directory structure
The project should begin with a clean structure such as:

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
  styles/
  utils/
  data/
docs/


0.4 Create the main layout

Create a BaseLayout that handles:

page shell
metadata placeholders
global typography and spacing baseline
navigation shell
footer shell
0.5 Configure deployment

Prepare the project to deploy to Cloudflare Pages.

No custom backend should be introduced at this stage.

### Phase 0 implementation note

The project uses the Cloudflare adapter already, which prepares the codebase for the deployment target. Full deployment configuration and publish validation are intentionally deferred to a later phase.

Exit Criteria

This phase is complete when:

the site runs locally
the structure is clean
the styling system is working
MDX and content collections are operational
deployment is possible
Phase 1 — Content Architecture
Goal

Define how projects and bilingual content will be stored and queried.

Deliverables
project collection schema
locale strategy
sample content entries
helper functions for querying projects

## Status

**In progress — core implementation completed.**

Completed so far:

- typed `projects` collection schema created
- locale field and bilingual structure defined
- separate project entries created for English and Portuguese
- seed entries added for:
  - Goodstart+
  - Sideout
  - Detalhe de Festa
  - WhatsApp Automation
  - Teacher Platform
- content utility functions implemented for:
  - projects by locale
  - featured projects
  - project by slug + locale
  - projects by type

Remaining for this phase:

- refine schema as real project content gets richer
- add project detail routes that consume the same content source
- replace placeholder image paths with real assets
Tasks
1.1 Define the project schema

Create a content collection schema for projects.

Each project should support fields such as:

title
slug
locale
type
status
summary
shortDescription
tags
stack
coverImage
gallery
externalUrl
featured
order
year
clientOrPersonal
draft

The exact schema may evolve, but it must be strongly typed.

1.2 Define the bilingual content model

Use separate project entries per language.

Recommended pattern:

src/content/projects/en/project-name.mdx
src/content/projects/pt/project-name.mdx

Do not rely on runtime translation for long-form project pages.

1.3 Add seed project entries

Create a few initial project entries so the UI can be built against real content.

Suggested starter entries:

Goodstart+
Sideout
Detalhe de Festa
WhatsApp Automation
Teacher Platform
1.4 Create content utility functions

Add utilities to query content cleanly.

Examples:

get all projects by locale
get featured projects
get project by slug + locale
get projects by type
get projects sorted by order/year
Exit Criteria

This phase is complete when:

projects live in structured content files
content is locale-aware
pages/components can query project data reliably
the system is ready for UI implementation
Phase 2 — Design System and UI Foundation
Goal

Create the visual foundation of the site before building the final homepage.

Deliverables
typography system
spacing system
color system
reusable UI primitives
first-pass responsive rules
Tasks
2.1 Define visual tokens

Create a restrained visual system.

Focus on:

monochromatic palette
strong contrast
elegant typography
subtle borders
calm spacing
premium feel

Avoid a default “template” look.

2.2 Build core UI components

Create reusable components such as:

page container
section wrapper
button styles
tags/pills
card shell
modal shell
image wrapper
headings
small metadata text
2.3 Set responsive layout rules

The site must work well on both desktop and mobile.

The homepage should feel especially natural on mobile due to the Instagram-inspired structure.

2.4 Establish image treatment rules

Decide how project thumbnails and cover images should be displayed.

Define:

aspect ratios
cropping behavior
hover behavior
fallback image behavior
loading strategy
Exit Criteria

This phase is complete when:

the visual system feels coherent
components are reusable
the design language is clear enough to build the homepage consistently
Phase 3 — Homepage MVP
Goal

Build the first complete version of the homepage structure.

Deliverables
profile-style header
bio section
profile metadata/stats
action buttons
highlights navigation section
first version of the project grid
Tasks
3.1 Build the profile header

The top of the homepage should include:

profile photo
name
descriptor/title
short bio
profile-style metadata
primary action buttons

This section should establish identity immediately.

3.2 Build profile stats/meta

Add a lightweight row with context such as:

project count
tool/stack count
category count
other non-vanity metadata if appropriate

These values may initially be static or derived from content.

3.3 Build action buttons

Include clear actions such as:

View Projects
About
Contact
Stack
3.4 Build highlight-style navigation

Create a section inspired by Instagram highlights.

These can point to:

key projects
categories
anchor sections
filtered project views
3.5 Build the project grid shell

Create the first version of the homepage grid.

Requirements:

visually close to Instagram-style browsing
project image visible
tag visible or accessible
supports multiple items
responsive layout
keeps visual rhythm clean
Exit Criteria

This phase is complete when:

the homepage already communicates the core idea of the site
the profile concept is visually obvious
the project grid is functioning with real content
Phase 4 — Project Cards and Modal Preview Experience
Goal

Implement the main browsing interaction for projects.

Deliverables
clickable project cards
modal preview system
modal content based on structured project data
actions for external site and internal detail page
Tasks
4.1 Build the project card component

Each card in the grid should show:

project image
project tag or type
optional title treatment
clear click affordance
4.2 Build the project modal

When the user clicks a card, open a modal.

The modal should include:

project title
project type
summary
stack preview
optional gallery preview
buttons:
Visit Site
See More Details
4.3 Ensure clean modal UX

The modal should support:

open/close state
keyboard escape
click outside to close
mobile usability
scroll-safe behavior
accessible focus handling if possible
4.4 Connect modal data to content entries

The modal should not use duplicated data.
It should read from the same content source as the full project pages.

Exit Criteria

This phase is complete when:

project browsing feels smooth
the homepage supports visual discovery without immediate full-page navigation
the modal is a real preview layer, not just decoration
Phase 5 — Project Detail Pages
Goal

Create full internal pages for each project.

Deliverables
project detail route structure
project detail layout
MDX rendering
navigation from modal/grid into full pages
Tasks
5.1 Create the project detail route structure

Each project should have a full internal page per locale.

Example direction:

/en/projects/goodstart-plus
/pt/projects/goodstart-plus
5.2 Create a dedicated project layout

The project page should support:

title
category/type
summary
hero image
project metadata
MDX body content
external site link
optional gallery
related projects if desired later
5.3 Render MDX project bodies

The long-form description of each project should be written in MDX and rendered cleanly.

5.4 Create navigation consistency

Users should be able to move naturally between:

homepage
modal preview
project detail page
projects index page, if present
Exit Criteria

This phase is complete when:

at least a few real projects have complete detail pages
the site feels credible and deep, not just decorative
the homepage has meaningful destinations behind the grid
Phase 6 — Bilingual Routing and Translation Layer
Goal

Implement the bilingual experience properly.

Deliverables
locale-aware routing
translated UI strings
localized project queries
language switch behavior
Tasks
6.1 Set up route-based locale structure

Implement routes for both languages.

Recommended structure:

/en/...
/pt/...

or another clear locale-first approach.

6.2 Create a UI string system

All shared interface labels should be locale-aware.

Examples:

buttons
navigation
modal labels
section titles
metadata labels
6.3 Make project content locale-aware

The homepage, grid, modal, and project pages must load the correct locale content.

6.4 Add language switching

Create a language switcher or equivalent locale navigation.

This should feel integrated and clean, not bolted on.

6.5 Handle missing translations gracefully

If a project does not yet exist in both languages, define fallback behavior clearly.

Prefer intentional handling rather than broken routes.

Exit Criteria

This phase is complete when:

the user can navigate the site in English and Portuguese
content and UI are both localized
the implementation feels native, not hacked in
Phase 7 — Additional Core Pages
Goal

Add the supporting pages that complete the site structure.

Deliverables
About page
Stack/Toolbox page
Projects index page
Contact page
Tasks
7.1 Build the About page

This page should explain André’s background from the perspective of real project building.

It should not read like a resume.

7.2 Build the Stack page

Create a page that documents tools, platforms, frameworks, and ecosystems André has worked with.

This page should be easy to expand over time.

7.3 Build the Projects page

Create a dedicated page listing all projects in a more structured way than the homepage.

This may support filtering later.

7.4 Build the Contact page

Create a simple, professional contact page or section.

Exit Criteria

This phase is complete when:

the site feels complete as a public professional presence
the homepage is supported by deeper navigation paths
the major information categories are covered
Phase 8 — UX Polish and Visual Refinement
Goal

Refine the experience so the site feels deliberate and premium.

Deliverables
microinteraction polish
final spacing and typography passes
improved image consistency
final hover/focus states
loading and transition polish
Tasks
8.1 Refine visual hierarchy

Review typography, spacing, and section flow.

8.2 Refine hover and interaction states

Project cards, buttons, modals, and navigation should feel polished.

8.3 Improve mobile experience

Special attention should be given to mobile because the design concept is socially inspired and should feel natural on small screens.

8.4 Review image quality and crop behavior

Make sure project images look intentional across different viewports.

8.5 Refine the monochromatic system

Ensure the final look feels premium rather than flat or unfinished.

Exit Criteria

This phase is complete when:

the site no longer feels like a rough prototype
the design feels cohesive
mobile and desktop both feel strong
Phase 9 — SEO, Metadata, and Sharing Quality
Goal

Make the site presentable and shareable across the web.

Deliverables
page metadata
Open Graph support
favicon/app icons
canonical logic if needed
clean structured titles/descriptions
Tasks
9.1 Add metadata support

Each page should have sensible title/description behavior.

9.2 Add Open Graph support

Project pages should have good social sharing previews where possible.

9.3 Add favicon and site identity assets

Make the site feel complete and branded.

9.4 Review multilingual metadata

Make sure the English and Portuguese versions both present well.

Exit Criteria

This phase is complete when:

links to the site share well
the browser and social presentation feel finished
the site is ready for public use
Phase 10 — Deployment, QA, and Launch
Goal

Deploy the first public version and validate quality.

Deliverables
production deployment
responsive QA pass
modal/navigation QA pass
locale QA pass
image QA pass
Tasks
10.1 Deploy to Cloudflare Pages

Set up production deployment with the final domain.

10.2 Validate all primary flows

Test:

homepage loading
project grid interaction
modal behavior
full project pages
locale switching
navigation
responsive layout
external links
10.3 Fix launch blockers

Resolve any layout, content, or routing issues found during QA.

10.4 Publish first version

Launch version 1 once the core experience is stable and credible.

Exit Criteria

This phase is complete when:

the site is publicly accessible
the main experience works well
the first version reflects the project vision clearly
MVP Definition
What version 1 must include

The first public version should include:

Astro + TypeScript + Tailwind foundation
bilingual routing
profile-style homepage
project grid
project modal preview
full project detail pages for at least a few projects
About page
Stack page
Contact entry point
production deployment
What version 1 does not need

The first version does not need:

CMS
database
authentication
dark/light theme switching unless easy
advanced filtering system
search
analytics dashboards
admin interface
elaborate animations everywhere
blog/lab section unless there is time

Version 1 should prioritize clarity and quality over feature count.

Future Phases

These are not part of the initial roadmap, but the architecture should allow them later.

Future Phase A — Notes / Lab

Possible section for thoughts, experiments, architecture notes, or lessons learned.

Future Phase B — Advanced project filtering

Possible filtering by:

type
year
stack
status
personal vs client
Future Phase C — Timeline view

A page showing André’s evolution through projects and tools.

Future Phase D — Theme modes

Optional dark/light experience if it truly improves the design.

Future Phase E — Analytics

Simple traffic analytics or click tracking.

Future Phase F — Rich project galleries

Expanded project media or device mockup views.

Priority Order Summary
Highest priority
project foundation
content architecture
homepage
project grid
modal
project pages
bilingual routing
Medium priority
supporting pages
visual polish
metadata
Lower priority
advanced filters
notes/lab
timeline
enhanced experimental features
Suggested Execution Order for an AI Agent

The AI agent implementing the project should follow this exact order:

create and configure the Astro project
set up TypeScript, Tailwind, MDX, and React integration
create the folder structure
define the project content collection schema
add seed project entries in both languages
build content query utilities
build the global layout and base UI tokens
build the profile-style homepage header
build the highlights section
build the project grid
build the project card component
build the modal preview flow
build the internal project detail layout
render project MDX pages
implement locale-aware routing and UI labels
build About, Stack, and Contact pages
refine responsive behavior and visual polish
add metadata and social sharing support
deploy to Cloudflare Pages
run final QA and launch
Success Criteria

The roadmap should be considered successful when the final site:

clearly communicates André Gacitua’s identity as a builder
feels visually inspired by a profile/social browsing model without becoming a clone
supports bilingual browsing cleanly
presents projects in a visual and structured way
provides depth through full project pages
remains lightweight and fast
is easy to expand over time
Final Instruction

The implementation should favor:

clean architecture
structured content
lightweight interactivity
design consistency
bilingual support from the beginning
gradual enhancement over unnecessary complexity

The final result should be a polished first version of a premium, Instagram-inspired portfolio/profile website for a real product builder.