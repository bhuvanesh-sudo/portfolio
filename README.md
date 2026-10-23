# Bhuvanesh Srikanth: portfolio

Personal site built with [Astro](https://astro.build). Static, fast, dark, and deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo on the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).

The workflow works out the address for you:

- Repo named `bhuvanesh-sudo.github.io` → site at `https://bhuvanesh-sudo.github.io/`
- Any other name, e.g. `portfolio` → site at `https://bhuvanesh-sudo.github.io/portfolio/`

## Where to edit things

| What | File |
|---|---|
| Name, email, socials, location | `src/data/site.ts` |
| Project list (order, text, links, status) | `src/data/projects.ts` |
| Case studies | `src/content/work/*.md` |
| Blog posts | `src/content/writing/*.md` (set `draft: false` to publish) |
| About page, tools, photography, games | `src/pages/about.astro` |
| Hero statement and the notes under the lens | `src/components/Hero.astro` |
| Colours, type scale, spacing | top of `src/styles/global.css` |
| Photo and résumé | `public/pp.jpg`, `public/resume.pdf` |

## Filling in the placeholders

Placeholders are the dashed, hatched boxes. To replace one:

- **Case study images:** put the image in `public/work/`, then in the case study Markdown replace
  `<figure class="placeholder" data-label="..."></figure>` with `![What it shows](/work/your-image.png)`.
  (If the site is on a `/portfolio/` path, write `/portfolio/work/your-image.png`.)
- **Featured project and case study hero shots:** these use `<figure class="placeholder">` in
  `src/components/FeaturedWork.astro` and `src/pages/work/[slug].astro`. Swap them for an `<img>`.
- **Photography:** drop files into `public/photos/` and fill in the `photos` list at the top of `src/pages/about.astro`.
- **Writing:** copy `src/content/writing/example-post.md`, write, set `draft: false`.
