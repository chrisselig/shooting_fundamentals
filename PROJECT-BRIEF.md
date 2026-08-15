# Project Brief — Shooting Fundamentals Site

Paste this file into the repo root before starting Claude Code. It carries over the
context from a phone chat session, since chat history does not transfer between surfaces.

---

## What we're building

A beginner-oriented website covering shooting fundamentals, written for someone new to
the sport — plain language, no jargon that isn't defined on the page.

**Author's context:** a new shooter, shooting at a range and interested in precision
rifle / PRS-style matches. Not an instructor. The site should read as "here's what I
learned and how it was explained to me," never as authoritative instruction.

**Deploy target:** Vercel.

---

## Non-negotiable content requirements

1. **Safety comes first, structurally.** The four universal firearm safety rules get
   their own page and appear before any technique content in the nav. They are not a
   footnote.
2. **A standing disclaimer** on every page: this site is not a substitute for
   qualified in-person instruction, and readers should take a certified course and
   follow all local laws and range rules.
3. **No legal advice.** Firearm law varies enormously by country, state, and
   municipality. Link out to official sources rather than summarizing law.
4. **No ammunition reloading data.** Load recipes, powder charges, and pressure data
   are genuinely dangerous to publish secondhand. Link to published manuals instead.

---

## Suggested content outline

Discuss and adjust with the author before building — this is a starting point, not a spec.

**Safety**
- The four rules, each with a short "what this looks like in practice" note
- Range commands and etiquette (cease fire, hot/cold range, muzzle direction)
- Eye and ear protection

**The fundamentals**
- Stance and natural point of aim
- Grip / rifle hold
- Sight alignment vs. sight picture (these are two different things and beginners conflate them)
- Trigger control — the single biggest accuracy factor for new shooters
- Breathing and the respiratory pause
- Follow-through
- Dry fire practice

**Reading conditions** (more advanced — mark it as such)
- Mirage and the visual wind scale
- Environmental wind indicators
- Building a wind bracket before a stage
- Source content already written: `wind-reading-field-card.html` (see below)

**Gear basics**
- What a beginner actually needs vs. what gets marketed to beginners

---

## Existing asset

`wind-reading-field-card.html` is a finished, print-optimized one-page field card
covering mirage reading, optic setup, environmental wind estimation, and wind
bracketing. It should become the "Reading conditions" section of the site, and the
printable version should stay downloadable as a PDF.

Its design tokens, if the site should feel related to it:

```
--ink:    #15171a    /* body text */
--muted:  #5c6268    /* secondary text */
--rule:   #c9ced3    /* section rules */
--hair:   #e4e7ea    /* table row dividers */
--accent: #2e4a5b    /* slate blue — numbering, mirage glyphs */
--paper:  #ffffff
```

Type: condensed sans for display headings (uppercase, tight), system sans for body,
monospace for all numbers and data labels. The card treats numbers as the visual
anchor of every row — speeds and magnifications set in mono at a larger size than the
prose beside them. Structural numbering (01–04) is used because the sections are a
real sequence.

The card also contains hand-drawn SVG mirage glyphs showing wave tilt at 90°/60°/30°/0°.
Those are worth reusing on the web — they are the most distinctive element.

---

## Open questions to resolve with the author

- Static HTML/CSS, or a framework? For a first site that's mostly text and diagrams,
  plain static files deploy to Vercel with zero config and stay editable by hand.
  Next.js is the Vercel default and better if the site will grow content-heavy, but it
  adds a build step and a lot of concepts to learn at once.
- Is content written in Markdown files, or straight into pages?
- Does the author want a printable card for other topics too, or is wind the only one?
- Custom domain, or a `.vercel.app` subdomain to start?

---

## Deploying to Vercel

Two paths, both fine:

- **Git-connected (recommended):** push the repo to GitHub, import it at vercel.com,
  and every push to `main` deploys automatically.
- **CLI:** `npm i -g vercel`, then `vercel` in the project directory for a preview
  deploy and `vercel --prod` to promote it.

A static site needs no framework preset — Vercel serves the directory as-is.
