## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## UI & Design System Guidelines

### Color Palette
- **Base Background**: `#F7FBFC` (page background & form inputs)
- **Soft Ambient / Glass**: `#D6E6F2` (subtle card borders & soft ambient light glows)
- **Borders & Badges**: `#B9D7EA` (accent badges, icon boxes, active hover borders)
- **Primary Brand / Action**: `#769FCD` (action buttons, `@rockhead07` handle, verified accents, active links)
- **Dot Grid Pattern**: Dark gray `#334155` at `opacity-30` (never blue)
- **Support / Buy Me a Coffee Card**: Solid yellow `#FFDD00` rectangular card container
- **No AI Slop Gradients**: Strictly avoid default purple/violet/indigo gradients

### Geometry & Card Styling
- Content cards must use **solid white** (`bg-white`) backgrounds.
- Use **sharp corner radii** (`rounded-md` / `rounded-sm`) for cards, buttons, and badges. Avoid bulbous/overly rounded curves.

### Mobile & Touch Device Rules
- Custom cursors must be disabled on touchscreens / Android (`@media (pointer: coarse), (hover: none)` and navigator checks).
- Social / external links on mobile touch must feature a 1-second delay to show the hover tooltip before opening.

### Profile & External Integration Assets
- Use the animated Tenor sticker GIF at `public/icons/verified.gif` for the verified creator badge next to the profile name.
- **Site Favicon**: Custom doodle avatar at `public/favicon.png` / `public/favicon.ico`.
- **Support / Buy Me a Coffee**: `https://buymeacoffee.com/danabagus0q`.
- **Target Contact Email**: `dana.bagus07@gmail.com` via FormSubmit AJAX endpoint.
- **Production Domain**: `https://links.rockhead07.tech` (Cloudflare DNS Proxy disabled / DNS Only).
- **Floating 3D Avatar**: 3D Three.js canvas widget without text speech bubble dialogs.

### Taste Skill (`design-taste-frontend`)
- Installed at `.claude/skills/design-taste-frontend/SKILL.md` (pinned to leonxlnx/taste-skill@c184364). Use it for design and polish work on this site.
- **The rules in this file win on any conflict.** Specifically, keep these even though the skill discourages them:
  - Custom cursor (CustomCursor.astro) stays, with the touch/mobile disable rules above.
  - Stack stays Astro + vanilla TypeScript `<script>` + Tailwind v4. Do not add React, Next.js, Motion, or GSAP for styling work.
  - Inline SVG icons and the brand SVGs already in use are allowed.
  - Emoji particles on the floating avatar stay.
  - Light mode only unless the owner asks for dark mode.
  - Palette, sharp radii, solid white cards, and the dot grid defined above are fixed brand tokens, not suggestions.
- Adopt from the skill: zero em dashes in visible copy, one accent color, one radius system, WCAG AA contrast on buttons and forms, `prefers-reduced-motion` for animations, motion only when it communicates something.

### Taste Skill (`design-taste-frontend`)
- Installed at `.claude/skills/design-taste-frontend/SKILL.md` (pinned to leonxlnx/taste-skill@c184364). Use it for design and polish work on this site.
- **The rules in this file win on any conflict.** Specifically, keep these even though the skill discourages them:
  - Custom cursor (CustomCursor.astro) stays, with the touch/mobile disable rules above.
  - Stack stays Astro + vanilla TypeScript `<script>` + Tailwind v4. Do not add React, Next.js, Motion, or GSAP for styling work.
  - Inline SVG icons and the brand SVGs already in use are allowed.
  - Emoji particles on the floating avatar stay.
  - Light mode only unless the owner asks for dark mode.
  - Palette, sharp radii, solid white cards, and the dot grid defined above are fixed brand tokens, not suggestions.
- Adopt from the skill: zero em dashes in visible copy, one accent color, one radius system, WCAG AA contrast on buttons and forms, `prefers-reduced-motion` for animations, motion only when it communicates something.
