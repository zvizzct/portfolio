# Portfolio Design System v6

## 1. Direction

The portfolio should now feel closer to a plain text file or a very clean Google Docs page than to a designed website. It should look centered, simple, quiet, and structural without feeling empty.

This version intentionally avoids:
- editorial styling
- multiple visual systems
- stacked grids and side-by-side content
- decorative separators
- strong component framing
- utility-class-driven styling as the primary authoring model

The page should read like one clear document.

## 2. Core Principles

1. One typeface only.
2. One reading column only.
3. Spacing does the organization.
4. Text is the interface.
5. The page should feel closer to a document than to a portfolio template.

## 3. Visual Language

### Surfaces
- outer background should feel like app chrome
- main content should feel like a plain document page
- center the page on desktop
- keep the sheet simple: subtle border only, no decorative card treatment

### Mood
- minimal
- direct
- technical
- readable
- almost plain

## 4. Palette

### Core
- `--canvas: #c9c9c7`
- `--paper: #f4f4f2`
- `--paper-alt: #eeeeed`
- `--ink: #1e1e1c`
- `--ink-deep: #111110`

### Support
- `--accent: #4a5c6e`
- `--muted-ink: rgba(30, 30, 28, 0.72)`
- `--soft-ink: rgba(30, 30, 28, 0.48)`

### Rules
- keep contrast clear
- avoid ornamental color use
- background should distinguish page from canvas without becoming decorative

## 5. Typography

### Primary Family
- system monospace

### Usage
- same family everywhere
- section headings only slightly stronger than body text
- metadata should not switch into another visual language
- links should look like text links

### Avoid
- serif display styles
- mixed font systems
- oversized headings

## 6. Layout

### Page
- centered document sheet
- medium reading width
- one vertical flow from top to bottom
- document width should stay around `74ch` inside the frame
- page frame should stay under `880px`

### Structure
- no columns in hero
- no columns in projects
- no side notes in profile
- no stacked desktop grids for supporting content

## 7. Hero

The hero should feel like the first lines of a text file.

### Pattern
1. small context line
2. name
3. short positioning line
4. short paragraph
5. text links
6. compact notes written as lines

## 8. Sections

### Rules
- section titles should be small and simple
- light separators are acceptable when they read as document structure
- sections should be separated mostly by margin, with one quiet top rule per block

## 9. Entries

Experience, projects, studies, and profile notes should all follow the same logic:

- small metadata
- title
- description
- optional text links

Everything should stack vertically.

## 10. Actions

### Rules
- link behavior only
- underline instead of button chrome
- lowercase is acceptable
- no filled or outlined buttons
- hover should only change ink/accent, never add pill or button framing

## 11. Responsive Behavior

### Mobile
- keep exactly the same single-column logic
- remove visual framing if it hurts simplicity
- never introduce alternate grids
- keep the same document frame logic, reducing margin and padding instead of changing layout model

## 12. Implementation Notes

- Styling lives in component-local CSS plus a small global layer in `src/layouts/Layout.astro`.
- Tailwind is intentionally removed from the project; the design system should remain readable without utility infrastructure.
- The active runtime target is Astro 6 with Node `>=22.12.0`.
- Legacy components that depend on removed styling systems should be deleted, not kept as dormant alternatives.

## 13. Final Checklist

- [x] one font only
- [x] one column only
- [x] document-like centered page
- [x] simplified background
- [x] no decorative grids
- [x] links instead of buttons
- [x] local CSS instead of legacy Tailwind setup
