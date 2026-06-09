---
name: Dan The Man Auto Repair
description: Performance-garage lead-generation website for local auto repair in Humble, TX.
colors:
  deep-black: "#0A0A0A"
  charcoal: "#1C1C1E"
  carbon-black: "#111111"
  bright-red: "#E10606"
  glow-red: "#FF2A2A"
  dark-red: "#870000"
  metallic-silver: "#C0C0C0"
  steel-gray: "#6E6E6E"
  white: "#FFFFFF"
  gold-accent: "#F5C542"
typography:
  display:
    fontFamily: "Titan One, Anton, sans-serif"
    fontSize: "clamp(3rem, 8vw, 5.8rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0"
  headline:
    fontFamily: "Anton, Montserrat, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0"
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.65
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.bright-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-secondary:
    backgroundColor: "{colors.carbon-black}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
---

# Design System: Dan The Man Auto Repair

## 1. Overview

**Creative North Star: "Redline Repair Bay"**

The system should feel like stepping into a dark performance garage lit by red neon rails, chrome signage, carbon fiber panels, and engine hardware. The design is intense, but the information stays direct: phone, services, location, and booking path.

**Key Characteristics:**
- Deep black and charcoal surfaces with red neon action cues.
- Metallic silver heading treatments and strong condensed typography.
- Editable HTML service boards instead of flat flyer images.
- Motion that feels like a light sweep or panel reveal, never slow or decorative.

## 2. Colors

The palette is locked to the supplied brand board: black garage depth, red urgency, chrome contrast, and a very small gold accent for premium callouts.

### Primary
- **Bright Red** (#E10606): Primary CTA fills, active states, borders, section lines, and urgent labels.
- **Glow Red** (#FF2A2A): Neon glows, hover rings, light sweeps, and active problem chips.

### Secondary
- **Metallic Silver** (#C0C0C0): Major heading surfaces, chrome panels, service-board labels, and icon treatments.
- **Gold Accent** (#F5C542): Used sparingly for "Call Today" and rating-style highlights only.

### Neutral
- **Deep Black** (#0A0A0A): Body background and deepest visual field.
- **Charcoal** (#1C1C1E): Panels, service cards, contact surfaces.
- **Carbon Black** (#111111): Alternating panels and form fields.
- **Steel Gray** (#6E6E6E): Secondary borders, small separators, muted technical detail.
- **White** (#FFFFFF): Body copy and high-contrast control text.

**The No Pastel Rule.** Do not introduce soft colors, blue mechanic defaults, or light washed-out service sections.

## 3. Typography

**Display Font:** Titan One, then Anton, then sans-serif  
**Body Font:** Montserrat, then system-ui, then sans-serif

**Character:** Condensed, loud, and signage-like for headings; clean and practical for body copy.

### Hierarchy
- **Display** (400, clamp(3rem, 8vw, 5.8rem), 0.9): Hero wordmark and major chrome statements.
- **Headline** (400, clamp(2rem, 5vw, 4.5rem), 0.95): Section titles and CTA headers.
- **Title** (800, 1.1rem to 1.5rem, 1.2): Service cards, menu categories, process steps.
- **Body** (500, 1rem, 1.65): Copy with a max line length near 70ch.
- **Label** (900, 0.8rem, 0): Short uppercase labels only, never full body paragraphs.

**The Chrome Headline Rule.** Chrome treatment belongs on major headings only. Body text stays plain white for readability.

## 4. Elevation

Depth comes from tonal layering, red glow, inset highlights, and metallic borders rather than generic drop shadows. Shadows are dark, tight, and tied to the neon light source.

### Shadow Vocabulary
- **Red Glow** (`0 0 26px rgba(255, 42, 42, 0.35)`): CTA hover, active chips, and selected panels.
- **Panel Depth** (`0 18px 40px rgba(0, 0, 0, 0.45)`): Large hero and menu surfaces only.

**The Light Source Rule.** If an element glows, the glow must be red and must correspond to an action, selection, or neon rail.

## 5. Components

### Buttons
- **Shape:** squared performance pill with modest radius (6px), angled shine where appropriate.
- **Primary:** bright red fill, white text, black inset edge, red glow on hover.
- **Secondary:** black or transparent fill with metallic border and white text.
- **Focus:** visible red outline with enough offset to stand out on black.

### Chips
- **Style:** charcoal base, red border on active, metallic text, minimum 44px tap height.
- **State:** selected chips fill red and write their value into the booking form.

### Cards / Containers
- **Corner Style:** 8px radius for cards, 12px for large panels.
- **Background:** carbon black or charcoal with honeycomb texture.
- **Border:** red or steel hairlines. No side-stripe card accents.
- **Internal Padding:** 18px to 28px depending on density.

### Inputs / Fields
- **Style:** black fields with red focus rings, white labels, readable placeholders.
- **Error / Disabled:** visible text states, no color-only messaging.

### Navigation
- Sticky compact dark header with visible phone number, direct call CTA, and mobile menu. Mobile keeps a bottom action bar with Call, Book, and Directions.

## 6. Do's and Don'ts

### Do:
- **Do** keep the phone number visible in the header and bottom action bar.
- **Do** rebuild service content as HTML with editable rows, cards, and form fields.
- **Do** use carbon, honeycomb, red neon, chrome, tool, engine, and car motifs.
- **Do** provide reduced-motion fallbacks.

### Don't:
- **Don't** use generic mechanic-shop templates, pastel palettes, flat white sections, or blue auto-service defaults.
- **Don't** use a flyer image as the service menu.
- **Don't** invent exaggerated reviews or claims.
- **Don't** add repeated section-number labels or generic AI landing-page scaffolding.
