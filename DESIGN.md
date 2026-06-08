# Design System — Cabinet Juridique International

## Design Read

Reading this as: international corporate law firm landing for C-suite and cross-border clients, with a restrained editorial-luxury language (white-shoe firm / Condé Nast restraint), leaning toward Tailwind + Cormorant Garamond + Inter + dignified scroll reveals.

## Taste Dials (Override)

| Dial | Value | Rationale |
|------|-------|-----------|
| DESIGN_VARIANCE | 6 | Asymmetric editorial layout, not chaotic |
| MOTION_INTENSITY | 2 | Heavy, dignified; no float/drift |
| VISUAL_DENSITY | 2 | Gallery whitespace, magazine rhythm |

## Atmosphere

Deep anthracite evening boardroom. Champagne gold catches light on letterhead edges. Silence, not spectacle. Brussels limestone meets Ankara institutional heritage.

## Color Palette

| Name | Hex | Role |
|------|-----|------|
| Deep Anthracite | `#121315` | Primary background |
| Night Surface | `#1a1c1f` | Elevated surfaces, cards |
| Elevated | `#22252a` | Form inputs, panels |
| Champagne Gold | `#C4A574` | Primary accent, rules, focus |
| Brushed Bronze | `#A68B5B` | Secondary accent, hover |
| Ink | `#F5F3EF` | Primary text |
| Muted | `#9B9590` | Secondary text, labels |

Background gradient: subtle single-direction `#121315` → `#141820` (night blue undertone). No mesh, no aurora.

## Typography

| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| Display | Cormorant Garamond | 400, 500, 600 | Headlines, `text-wrap: balance` |
| Body | Inter | 400, 500 | 65–75ch max, `leading-relaxed` |
| Eyebrow | Inter | 500 | Uppercase, `letter-spacing: 0.12em`, 0.75rem |

### Scale (fluid clamp)

- h1: `clamp(2.5rem, 5vw + 1rem, 4.5rem)`
- h2: `clamp(2rem, 3vw + 1rem, 3rem)`
- h3: `clamp(1.5rem, 2vw + 0.5rem, 2rem)`
- body: `1.0625rem` (17px)
- small: `0.875rem`

Display letter-spacing: `-0.02em` to `-0.03em`. Body: `0.01em`.

## Layout

- Container: `max-width: 80rem` (1280px)
- Horizontal padding: `clamp(1.5rem, 5vw, 4rem)`
- Section gap: `clamp(5rem, 12vw, 9rem)`
- Grid: 12-column, asymmetric splits (7/5, 5/7 alternating)
- z-index: nav 50, whatsapp 40, mobile-menu 60

## Components

### Primary Button
- Outline style: 1px champagne border, transparent fill
- Hover: gold underline animates `scaleX(0→1)` from left, 200ms `cubic-bezier(0.23, 1, 0.32, 1)`
- Active: `scale(0.98)`, 120ms
- Padding: `0.875rem 2rem`

### Form Inputs
- Background: `#22252a`
- Border: 1px `#33363b`, focus: 1px `#C4A574`
- Label above input, 0.5rem gap

### Language Switcher
- Minimal inline pills: EN | FR | NL
- Active: champagne text + bottom rule

### WhatsApp FAB
- Fixed bottom-right, 56px circle
- Dark surface, gold ring on hover (subtle scale 1.02)
- No pulse animation

## Motion (Emil Design Engineering)

### Scroll Reveal
- Properties: `opacity`, `transform` only
- From: `opacity: 0`, `translateY(16px)`
- To: `opacity: 1`, `translateY(0)`
- Duration: 800ms
- Easing: `cubic-bezier(0.77, 0, 0.175, 1)` (ease-in-out dignified)
- Trigger: IntersectionObserver, threshold 0.15, once
- Reduced motion: instant visible, no transform

### Hover
- Buttons/links: 150–200ms, `cubic-bezier(0.23, 1, 0.32, 1)`
- Never `transition: all`
- Never `ease-in` on UI feedback

### Banned
- Bounce, elastic, float, parallax, marquee
- `transform: scale(0)` entrances
- Floating orbs, mesh gradients, glassmorphism everywhere
- Scroll chevron bounce

## NEVER DO

- Three equal feature cards in a row
- Purple/blue neon accents
- Inter-only without serif contrast (we use both per brief)
- "Scroll to explore" or bouncing arrows
- Emojis
- Marketing buzzwords in copy
- `transition: all`
- Pure black `#000000` backgrounds
