# artlu.ai — Project Rules

## Working Process
- Never make code changes without confirming first
- Show mockups/visuals before building
- Don't spend lots of tokens without checking in
- Ask before building, not after

## Design System
- Font: IBM Plex Mono
- Background: #08090a
- Surface: #0e0f11
- Border: #1a1d22
- Title text: #f0f1f3
- Description text: #8a8f9a
- Stack text: #3a3f48
- Dim text: #555b66
- Green accent: #4ade80
- Green background: #062b12
- Green border: #163d28
- Max width: 1200px
- Top padding: 48px
- Two font sizes only: 12px titles, 11px everything else
- Header says "artlu.ai" not "artluai"

## Table (Desktop)
- Columns: project, status, stack, date, links, vis, ops
- Vertically centered cells
- Arrow ▶ aligns with the title (flex-start)
- Descriptions wrap naturally, never clip or truncate
- Combined links column: site ↗ · gh ↗ · ▶ demo
- Sorted newest first (date descending)
- No × delete button in rows — delete is inside the edit form

## Cards (Mobile < 640px)
- Switch from table to card layout
- Same two font sizes
- Description and stack separated by dimmer color (#3a3f48 for stack)
- Date and links share one bottom line

## Public View
- Tagline: "100 projects. 100 days."
- Counter: "day X/100 · X shipped · X to go"
- Bio: "one person. no coding experience. just AI and an internet connection."
- No footer

## Dashboard View
- Compact stats: "$ day X/100 · tracking X projects · X launched · X public · X to go"
- Draft auto-save when clicking outside the form
- Delete inside edit form under collapsible "danger zone" dropdown
- Must type project name to confirm deletion

## Visibility
- Three levels: public, private, gated
- Gated = placeholder for future paywall (shows lock icon)
- Each file has its own visibility toggle independent of the project

## Embed vs Link
- Live demo tab appears automatically when the project's link field points to a deployed web app
- Auto-detected embeddable domains: netlify.app, vercel.app, github.io, pages.dev, render.com, railway.app, fly.dev, surge.sh
- Not embeddable: github.com, youtube.com, loom.com, screen.studio, twitter.com, notion.so, google docs/drive
- Embed height is configurable per project via the embedHeight field (default 600px)
- Link only (no embed): Chrome extensions, full web apps with their own auth, anything that doesn't work in a small window

## Video Embeds
- Supported: YouTube, Loom
- Auto-converts share URLs to embed URLs
- Screen Studio links open in a new tab (screen.studio blocks iframes)

## Project Detail Tabs
- Info tab: always shown — description, media, screenshots, repo link, files
- Live demo tab: shown only when link is an auto-detected embeddable URL
- Files tab: shown only when repo field is set — reads public GitHub repo via GitHub Contents API

## Architecture
- React + Vite frontend
- Firebase Firestore, Firebase Auth (Google), Firebase Analytics
- Deployed on Netlify at artlu.ai
- GitHub: github.com/artluai
- MCP server connects Claude to Firestore
- Day 1 start date: 2026-03-18

## Pending / Future
- Drag-and-drop reordering
- Batch import
- Stripe/Gumroad paywall on gated content
