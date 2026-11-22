# Gotham — Bikash Choudhury Portfolio

A multi-page Batman-inspired portfolio built with React, JavaScript, Tailwind CSS, custom CSS and Framer Motion.

## Pages
- `/` — Home / Gotham introduction
- `/about` — About the developer
- `/arsenal` — Skills and tools
- `/missions` — Project case files
- `/contact` — Contact and social links

## Run locally
```bash
npm install
npm run dev
```

## Music setup (important)
The project does **not** include the copyrighted “Sajan Sajan” recording. The player is wired to `public/audio/sajan-sajan.mp3`, but that file must be supplied separately from a copy you are legally allowed to use.

1. Obtain an audio file you have permission to use.
2. Rename it exactly `sajan-sajan.mp3`.
3. Put it in `public/audio/`.
4. Re-run `npm run dev` or redeploy. Press Play in the music player; browsers require a user gesture before audio starts.

Alternatively, use the **upload icon** in the music player to select an audio file from your device. This works immediately without copying the file into the project, but the selected file is local to that browser session and is not deployed to visitors.

## Deploy
Import the project into Vercel and deploy. `public/_redirects` is included for static-host SPA fallback; for Vercel, add `vercel.json` with:
```json
{"rewrites":[{"source":"/(.*)","destination":"/"}]}
```

Update the email address in `src/pages/Contact.jsx` if needed.

## Code organization

- React pages and shared components are formatted with readable spacing, descriptive names, and consistent imports.
- Tailwind CSS is configured in `tailwind.config.js`.
- Global resets and common layout utilities use Tailwind's `@apply` layer in `src/index.css`.
- The remaining CSS in `src/index.css` is kept for Gotham-specific artwork, gradients, keyframes, and responsive visual effects that are easier to express as custom CSS. The visual design and page structure have not been redesigned.
