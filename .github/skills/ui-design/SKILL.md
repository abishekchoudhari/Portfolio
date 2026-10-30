---
name: ui-design
description: "Use when planning, reviewing, or creating original UI and visual design ideas for websites, applications, dashboards, portfolios, landing pages, stores, and other digital products."
argument-hint: "Describe the product, audience, goals, or share design references"
user-invocable: true
---

# UI Design

Turn a product idea, brief, or visual reference into a clear, distinctive, usable, and implementation-ready UI direction. This skill applies to any digital experience—not only portfolios. Make the design responsive and suitable for all screen sizes.

## 1. Understand the Product

Before choosing a visual style, identify:

- **Product and format:** portfolio, marketing site, SaaS product, dashboard, ecommerce, editorial site, mobile app, or another interface.
- **Audience and context:** who will use it, what they know, and where or how they will use it.
- **Primary goals:** the most important user tasks and the product or business outcome.
- **Content and hierarchy:** required pages, sections, data, actions, and the priority order between them.
- **Brand and constraints:** existing assets, design system, framework, integrations, accessibility needs, and timeline.

Use the brief and repository as the source of truth. Do not invent customer claims, metrics, testimonials, product features, or credentials. If a missing detail materially changes the design, ask a focused question; otherwise, state a reasonable assumption and proceed.

## 2. Research References Without Copying

When references are supplied:

1. Inspect accessible pages and relevant states, not just the first screen. Look at navigation, content hierarchy, calls to action, imagery, interactions, and responsive behavior when available.
2. Audit the visual system: light/dark theme, color roles, typography, spacing, grid, backgrounds/textures, borders, shadows, radii, imagery, and overall density.
3. Audit motion and interaction separately:
   - Distinguish entrance transitions, hover/focus feedback, looping animation, scroll-triggered reveals, scroll-linked/view-timeline motion, parallax, smooth section navigation, and sticky elements.
   - Check the cursor specifically: ordinary pointer changes, custom cursor followers, hover enlargement, cursor trails, and whether the effect disappears on touch or keyboard input.
   - Test relevant controls and sections; inspect computed styles or source where useful, but do not assume an effect is visible merely because a CSS class or animation rule exists.
   - Record observed behavior separately from intended behavior, inferred implementation, and anything that could not be verified.
4. Keep observations separate from proposals. Do not reproduce a reference's recognizable layout, exact color system, artwork, copy, brand, or signature interaction.
5. If a site cannot be loaded or inspected, say so and base observations only on accessible metadata or text; do not imply a visual review.
6. Translate observations into a new direction fitted to this product's audience, content, and goals.

### Example lessons from the provided references

These are research notes, not templates:

- [DeveloperFolio](https://developerfolio.js.org/) is a reusable developer-portfolio template. The inspected page uses a white/light canvas, centered intro, handwritten-style blue signature wordmark, Montserrat-like sans typography, purple primary actions, and a hamburger menu. Its content covers skills, experience, open source, achievements, blogs, talks, resume, and contact. A wave animation and reveal transitions were present, and smooth scrolling was enabled. Use its breadth as a content checklist, not a requirement to include every section; no custom cursor was observed.
- [Tajmirul's site](https://www.tajmirul.site/) uses a charcoal canvas, gray text, vivid electric-green display type and CTA, oversized condensed hero lettering, availability/status, and numeric proof points. A hamburger opens the section navigation; the page continues into a personal intro, stack, experience, and projects. Small decorative spin animations were active. The native cursor is suppressed by CSS; a replacement cursor effect could not be confirmed, so do not assume hidden-cursor styling is a usable custom cursor.
- [Aadarsh Rai](https://aadarshrai.vercel.app/) uses a stark grayscale portrait-led hero, oversized horizontally moving name typography, and compact Work/About/Contact navigation, followed by project links and concise AI/ML positioning. Greeting/overlay and globe/circle effects, plus reveal-up section transitions, were present. In the inspected narrow viewport, the hero's oversized text produced horizontal overflow; treat that as a responsive issue to avoid, not a design feature. No custom cursor was detected.
- [Aashish Jaini](https://www.aashishjaini.me/) uses a deep navy background, pale text, Inter-like typography, a typewriter hero, and resume/contact actions. The page exposes core areas, education, projects, certifications, and contact. Typewriter, pulse, bounce, fade-in, and slow-spin animations were present. Screenshot capture failed during inspection, so the theme and content are based on computed styles and the rendered document structure rather than a verified screenshot. Native cursor suppression was detected; a custom cursor replacement was not verified.
- [Abhisek Panda](https://abhisekpanda072.vercel.app/) uses a near-black backdrop with a subtle grid, warm red/orange ambient glows, bold light headings, red gradient/glow calls to action, and a scroll cue. The long page includes skills, projects, work experience, education, open-source contributions, certifications, and contact. Pulse/glow and gradient-shift animations were active. Select evidence rather than reproducing the entire resume-like inventory.
- [Adina Hawaldar](https://www.adinaa.me/) uses an off-white/light-gray canvas, large uppercase identity typography, restrained black rules, concise role/location metadata, and a centered intro with small Resume/Contact actions. Its compact header includes a moon theme control and menu; the page continues through projects, experience, skills, and contact. A status ping, line reveal, and image fade-in effects were detected; the observed cursor remained native.
- [Aman Rai](https://obliviousaman.netlify.app/) uses a near-black, star-speckled canvas, steel-gray typography, a restrained monogram/script logo, oversized changing hero word, and a rounded contact action. Section content includes about, skills, projects, and contact, with an EN/JA language control and resume choices. The hero word flips on an 8-second loop, with line and image reveal effects further down. Native cursor behavior was observed; console warnings indicated some GSAP animation targets were not found.
- [Anandhu Sajan](https://www.anandhusajan.com/) combines a light photographic hero with a rounded translucent top bar, colorful Music/Books/contact actions, a theme toggle, and a fixed pill-like bottom section navigation. Its content spans development, projects, music, books, security, blog, and contact. Floating cards loop over roughly 7–8 seconds, music bars animate under one second, and status indicators pulse. The observed cursor remained native. Its broad interests work because the sections are explicitly navigable; use that breadth only when it suits the audience.
- [Andrii Ponomarienko](https://andriiponomarenko.vercel.app/) demonstrates explicit section navigation, grouped expertise, project discovery, technology filters, and live-demo/source links. In the inspected view, its visual language is charcoal/navy with cyan accents, a subtle geometric hero grid, pale text, and a fixed translucent blurred header. The active section is underlined; SVG illustrations use scroll-linked drawing/reveal timelines, while project/filter controls use short hover/transition feedback. No custom cursor treatment was detected; interactive elements use the normal pointer. Project content remained visually transparent in the inspected browser state despite being present in the page structure, so its reveal behavior could not be confirmed as working there. Transfer useful ideas such as clear navigation and purpose-led motion; do not copy its colors, grid, layout, or interactions.
- [Developer portfolios collection](https://github.com/emmabostian/developer-portfolios) and [Design Inspiration & Resources](https://github.com/emmabostian/design-inspiration) are discovery resources spanning many portfolio examples and categories such as animation, aesthetics, navigation, typography, graphics, and color. Use them to broaden research and compare patterns, not as permission to reproduce any one example.

## 3. Choose a Direction

Create a direction that expresses the product's character and supports its tasks. Do not apply a fixed palette, type pairing, layout, or trend to every project.

- If the brief is open-ended, propose two or three meaningfully different directions in a few lines, each tied to the audience and product purpose. Recommend one; do not create superficial color-only variations.
- If the user already specified a style or brand system, respect it and improve within those constraints.
- Describe the selected direction through mood, palette logic, typography roles, layout principles, image/graphic approach, and motion level.
- Prefer a memorable idea with a clear rationale over decorative effects or a generic “modern” look.

## 4. Design the Experience

- **Information architecture:** arrange pages and sections around user tasks. Give each screen a clear purpose, a visible primary action, and a sensible next step.
- **Hierarchy and layout:** establish a readable order with spacing, alignment, scale, and contrast. Use grids and generous whitespace where helpful, not as defaults that override the content.
- **Typography:** select legible type styles for headings, body copy, labels, and data. Maintain comfortable line lengths, responsive sizing, and consistent hierarchy.
- **Color and surfaces:** define roles for backgrounds, text, borders, actions, status, and accents. Check contrast and communicate meaning with more than color alone.
- **Images and graphics:** use relevant product imagery, real content, diagrams, illustrations, or data visualization with a clear purpose. Avoid unrelated stock art, fabricated interface screenshots, and decoration that competes with the content.
- **Components and states:** design controls consistently, with clear labels, affordances, focus, hover, pressed, disabled, loading, success, empty, and error states as applicable.
- **Content:** use concise, specific language. Design realistic content density and lengths; do not fill layouts with repeated lorem ipsum or unsupported claims.
- **Motion:** use animation to clarify change, feedback, or spatial relationships. Specify what triggers it (load, interaction, scroll position, or state change), how long it lasts, and what happens when motion is reduced. Keep it brief and optional; never block access to content or use scroll-jacking/autoplay sound. Respect `prefers-reduced-motion`.
- **Pointer and hover:** custom cursor effects are optional decoration, never required for discovery or operation. Preserve native cursor affordances, touch and keyboard parity, and avoid trails or movement that obscure content or cause motion discomfort.
- **Trust and usability:** make navigation, pricing, permissions, forms, destructive actions, and system status transparent and predictable. Provide clear recovery paths for errors.

## 5. Adapt to the Product Type

Treat these as prompts, not mandatory templates:

- **Portfolio / profile:** make the person's role and strongest evidence easy to understand; curate selected work and provide a direct contact path.
- **Marketing / business site:** explain the offer, audience, and value early; support claims with real evidence and make the next step obvious.
- **Application / SaaS:** optimize around core workflows, navigation, system feedback, data density, and realistic empty/loading/error states.
- **Dashboard / analytics:** prioritize the decisions users need to make; use clear labels, honest scales, helpful units, and accessible charts.
- **Ecommerce:** support product comparison, transparent pricing/shipping, confident selection, and a clear, low-friction checkout.
- **Editorial / content:** prioritize reading comfort, scannability, metadata, wayfinding, and related-content discovery.
- **Forms / onboarding:** ask only for what is needed, explain constraints, preserve entered information, and provide actionable validation.

## 6. Responsive and Accessible by Default

- Design for small phones, large phones, tablets, laptops, and wide screens. Do not treat mobile as a scaled-down desktop.
- Use flexible containers, fluid type and spacing, and content-driven breakpoints. Reflow layouts when columns become cramped; prevent horizontal overflow and clipped controls.
- Preserve reading order and essential functionality across viewport sizes. Make controls comfortable for touch and keyboard use.
- Use semantic structure, meaningful labels and alternatives, visible focus, sufficient contrast, and accessible status feedback.
- Account for zoom, text resizing, reduced motion, and varied content lengths. Do not rely on hover, color, or animation as the only way to reveal information.

## 7. Use Design Tools When Available

1. Check whether Stitch, Figma, Canva, or another relevant design MCP is available in the current environment.
2. Use a tool when it materially helps explore or communicate the chosen direction. Start a fresh concept/design system rather than editing or copying a reference.
3. Include the product purpose, audience, content hierarchy, visual direction, interaction needs, and mobile behavior in the design prompt.
4. Do not send private project information to an external tool unless the user has authorized it.
5. If a design MCP is unavailable or fails, continue with a concise written specification and available implementation tools. Never claim an artifact was generated if it was not.

## 8. Validate Before Delivery

- Review representative narrow, tablet, and desktop sizes; inspect key interaction states and realistic content density.
- Check layout overflow, hierarchy, text readability, control usability, contrast, keyboard focus, and reduced-motion behavior.
- For reference studies, report theme/style, hierarchy, navigation and scroll behavior, animation triggers and timing, hover/focus feedback, cursor treatment (including when none is present), responsive changes, and any unverified or broken states.
- If implementing, follow the repository's existing framework and components. Run the smallest relevant visual, accessibility, build, or test validation available.
- Summarize the audience and goal, selected direction, page/screen structure, visual system, key interactions, responsive behavior, assumptions, and validation performed.

## Deliverable

Provide a concise, actionable design concept or implement the requested UI. Explain why the choices fit the product, identify any assumptions or inspection limits, and ensure the result is original rather than a copy of the references.
