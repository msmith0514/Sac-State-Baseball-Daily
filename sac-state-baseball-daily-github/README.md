# Sac State Baseball Daily — GitHub Pages Ready

This version is configured so GitHub can build and publish the demo site automatically with **GitHub Pages**.

## Upload to GitHub

1. Create a GitHub repository, for example `Sac-State-Baseball-Daily`.
2. Upload **the contents of this folder** to the repository. Do not upload only the ZIP file.
3. Make sure the default branch is named `main`.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. Open the repository's **Actions** tab. The workflow named **Deploy Next.js site to GitHub Pages** should run automatically.
7. When it finishes with a green checkmark, return to **Settings → Pages** to see the public URL.

For a repository named `Sac-State-Baseball-Daily`, the URL will normally look like:

`https://YOUR-USERNAME.github.io/Sac-State-Baseball-Daily/`

## Why this build works on GitHub Pages

GitHub Pages is static hosting, so this package uses:

- `output: "export"` in Next.js
- static-compatible image handling
- automatic repository `basePath` detection during GitHub Actions
- `trailingSlash: true` for Pages-friendly route folders
- pre-generated demo player and archive pages
- a GitHub Actions workflow that publishes the generated `out/` directory

## Important production limitation

GitHub Pages cannot run server APIs, PostgreSQL/Prisma requests, cron jobs, or true real-time game fetching. The original cron route is preserved as reference code at:

`server-reference/api-cron/daily-route.ts`

The current GitHub Pages version is therefore ideal for evaluating the design and static demo experience. For verified automatic daily updates, live game status, database access, and scheduled jobs, deploy the production version to a server-capable platform such as Vercel while keeping the code in GitHub.

## Demo-data accuracy

All sample athletes, performances, news cards, videos, and live-game states remain explicitly demo/placeholder content. Do not replace them with unverified real-world claims.

## Run locally

```bash
npm install
npm run dev
```

For a local production export:

```bash
npm run build
```

The static site will be written to `out/`.
