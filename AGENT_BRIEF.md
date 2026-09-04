# Wedin — Agent Build Brief

You're building the frontend for **Wedin**, a train-and-place career platform ("Learn. Grow. Get Hired."). This is a Next.js (App Router) + TypeScript + Tailwind project. `tailwind.config.ts` and `lib/tokens.ts` are already in place — use the tokens defined there (`bg`, `surface`, `border`, `gold`, `ink`, `muted`) instead of arbitrary hex values or Tailwind's default palette (no `slate`, `zinc`, `blue-500`, etc.).

I've placed the four brand reference screenshots in `/design-reference/` — look at them before building anything. They show the lesson player, a payment-declined state, a registration-success state, and the splash screen. Match their visual language exactly, don't reinterpret it.

## Non-negotiable brand rules

1. **Gold (`gold`) is the only accent color, including for error/destructive states.** The reference "Payment Declined" screen uses gold, not red, for its icon. Do not introduce red, green, or any other semantic color for status — differentiate success/error through icon shape, copy, and layout, never color.
2. **Monospace (`font-mono`) is reserved for data values only** — timestamps, progress counters, error codes, card-number fragments. Never use it for body copy, buttons, or headlines.
3. **Backgrounds are `bg`, never pure black (`#000`) or Tailwind grays.** Text is `ink`, never pure white.
4. **Buttons are full pill radius.** Primary = gold fill, black text. Secondary = outline, gold or ink text, transparent fill.
5. **One motion moment per screen, not per element.** No hover-fade-in on every card. See "Motion" below for what's allowed.
6. Avoid generic AI-app tells: no tracked-out ALL-CAPS eyebrow labels above headings (except the tagline itself, which is fixed brand copy), no middle-dot-joined meta strings, no `→` appended to every button/link.

## Tokens reference (already in `tailwind.config.ts`)
```
bg:      #0A0A0A   surface: #161412   border: #2B2620
gold:    #E8B94D   ink:     #F5F2EA   muted:  #948E7E
radius:  pill (buttons) / card 20px (cards) / input 14px (inputs)
shadow:  glow → 0 0 40px rgba(232,185,77,0.25) — use once per screen, on the focal icon only
fonts:   font-display (Space Grotesk, headlines/wordmark) · font-body (Inter, everything else)
         font-mono (JetBrains Mono, data values only)
```

## Motion
- Splash: loading ring animates once on mount.
- Progress bars: fill animates from 0 → value on data load, not on every re-render.
- Status icons (success/error): single glow-pulse on entry, then still.
- No animation elsewhere in this phase.

---

## Build order — do not skip ahead

### Phase 0 — Primitives (build and visually review before Phase 1)
Create a `/app/kitchen-sink/page.tsx` route rendering every primitive below. Don't start Phase 1 until this page looks right.

Components (put in `/components/primitives/`):
- **Button** — variants: `primary` (gold fill/black text, pill), `secondary` (outline, pill), `ghost` (no border/fill). Sizes: `default`, `sm`. Disabled state at reduced opacity, no color change.
- **Card** — `surface` background, `border` 1px, `card` radius. Optional `interactive` variant (subtle border brighten on hover, no shadow).
- **Badge** — `mono` font, small pill/rounded-rect, used for timestamps (e.g. `01:15`) and status labels (e.g. `In Progress`). Status variant maps to text color only (gold for active, `muted` for neutral) — never a colored background chip.
- **ProgressBar** — track in `border` color, fill in `gold`, rounded ends. Support a labeled variant showing `mono` counter (e.g. `3/10`) alongside.
- **Input** — `surface` fill, `border`, `input` radius, gold border on focus. Include a text input and an OTP/code input (segmented boxes) variant.
- **StatusIcon** — circular, `surface` background, gold icon glyph, optional `glow` shadow. Used for both success and error — pass an icon prop (e.g. lucide `Check` or `TriangleAlert`), color never changes.
- **Sheet** — bottom sheet / modal, `surface` background, `card` radius on top corners only, slides up.
- **Toast** — small `surface` card, `border`, brief slide-in from top or bottom.
- **Avatar** — circular, optional small gold "verified" badge overlay (checkmark) in the corner.
- **EmptyState** — icon + short direct headline + one action. Voice: tell the person what to do next, don't apologize or moralize.

Render all of the above in the kitchen-sink page with labels, in both their default and edge-case states (disabled buttons, error input, empty state).

---

### Phase 1 — Onboarding

Route group: `/app/(learner)/onboarding/`

1. **`/onboarding` (splash)** — centered `WEDIN` wordmark in `font-display`, tracked; tagline "LEARN. GROW. GET HIRED." in tracked `font-mono` caps beneath; loading ring at bottom, animates once, then auto-navigates. Match the reference screenshot exactly — same layout proportions.
2. **`/onboarding/assessment-intro`** — one headline explaining what the assessment is and how long it takes (~10 min), one primary CTA ("Start Assessment"). No progress chrome on this screen.
3. **`/onboarding/assessment`** — one question per screen, `ProgressBar` (labeled variant, `mono` counter like `3/10`) at top, single-select or multi-select answer cards, primary CTA advances.
4. **`/onboarding/recommendation`** — recommended track shown as a hero `Card` with a gold border (the "featured" treatment), 1–2 alternate tracks as smaller cards below. Primary CTA: "Continue with {track}."
5. **`/onboarding/sign-up`** — single screen, minimal fields (name, email or phone, password or OTP flow). Don't split into a multi-step wizard for 3 fields.
6. **`/onboarding/success`** — matches the "Registration Successful" reference: `StatusIcon` with glow (check icon), headline "Registration Successful," body "Welcome to Wedin, {name}. Your journey to a world-class career starts now.", primary CTA "Go to Dashboard," secondary "Complete My Profile."

---

### Phase 1 — Learner dashboard & lesson player

Route group: `/app/(learner)/app/`

7. **`/app/dashboard`** — enrolled tracks as `Card`s in a list/grid, each showing track name, a `ProgressBar`, and completion `Badge`.
8. **`/app/track/[id]`** — lesson list grouped by module, each lesson row shows title + status `Badge` (`Locked` / `In Progress` / `Complete` — text-color differentiated, not background-colored).
9. **`/app/lesson/[id]`** (the reference lesson-player screen) —
   - Back button (top-left, circular, matches reference)
   - Video area with centered gold play button (circular, `glow`), scrub bar in `gold`/`border`, `mono` timestamps at each end (e.g. `02:45` / `15:30`)
   - Lesson title (`font-display` or bold `font-body`, two-line wrap as in reference) + short description
   - Tabs: "Notes" / "Resources" — active tab underlined in gold
   - Note rows: `mono` timestamp `Badge` on the left, note title + one-line description; the **currently-relevant note gets a gold border highlight** (match the reference — this is the one distinctive interaction detail, keep it)
   - Sticky bottom "Mark as Complete" primary pill button with a check icon
10. **`/app/track/[id]/complete`** — shown after the last lesson in a module: short congratulatory headline, what unlocks next, primary CTA.

---

## Explicitly out of scope this phase
Payment/enrollment flow, cohort/pricing selection, CV builder, job board, portfolio page, employer portal, admin portal. Don't scaffold routes for these yet.

## Acceptance check before calling a screen done
- Uses only the tokens above — no default Tailwind colors.
- Gold is the only accent; no red/green anywhere.
- Mono font appears only on data values.
- Matches the reference screenshots' layout proportions where a reference exists (splash, lesson player, success).
- Works down to a ~375px mobile viewport (this is a mobile-first learner app).