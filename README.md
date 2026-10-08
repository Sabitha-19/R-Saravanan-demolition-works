# R. Saravanan Demolition Works — Modern Editorial Website

A cinematic, modern editorial website built with React, Vite, Tailwind CSS, Framer Motion, and Lenis smooth scrolling for demolition contractor **R. Saravanan**.

## Single Source of Truth: `src/config.ts`

ALL business details, contact information, service areas, and services are managed strictly in `src/config.ts`:

1. **Business Identity**:
   - `CONFIG.business.name`: Business name placeholder (`"R. Saravanan Demolition Works"`).
   - `CONFIG.business.proprietor`: Owner name (`"R. Saravanan"`).
   - `CONFIG.business.pricingStatement`: Standard policy statement displayed wherever costs are mentioned:
     > *"Every site is different. Mr. Saravanan visits the site and gives you a clear written quote."*

2. **Direct Contact**:
   - `CONFIG.contact.phoneDisplay`: Visible phone number (`+91 98423 45077`).
   - `CONFIG.contact.telLink`: Dial link (`tel:+919842345077`).
   - `CONFIG.contact.whatsAppLink`: WhatsApp chat URL (`https://wa.me/919842345077`).
   - `CONFIG.contact.email`: Email address (`saravanan24121978@gmail.com`).

3. **Strict Content Rules**:
   - **No pricing or calculators**: No sq ft rates, formulas, or price ranges are displayed anywhere. Quotes are personally provided after on-site inspection.
   - **No fake statistics**: Experience years, awards, fake reviews, and license numbers are replaced with honest, clearly marked placeholders ready for authentic documentation.

4. **Curated Color Palette**:
   - `#003135` (Deepest teal) — Main dark background & footer
   - `#024950` (Dark teal) — Panels, cards, alternate sections
   - `#0FA4AF` (Bright teal) — Highlights, glowing pins, line art
   - `#AFDDE5` (Pale aqua) — Light statement section, body text on dark, soft borders
   - `#964734` (Rust) — The ONLY warm accent for primary buttons, arrows, and key highlights

5. **Typography**:
   - Display: **Inter Tight** (weight 500, tight line-height 0.92, tight tracking)
   - Body: **DM Sans** (weight 400, color `#AFDDE5`)
   - Labels: **JetBrains Mono** (12-13px uppercase with `+ +` markers)
