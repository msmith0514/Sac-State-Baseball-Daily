# Sac State Baseball Daily

A production-oriented prototype for an independent Sacramento State baseball tracking and sports-media site.

## What is included

- Responsive homepage in the requested section order
- Player directory and profile route
- Daily archive route
- Reusable header, section-heading and performance-card components
- PostgreSQL/Prisma schema with cross-provider external IDs and source timestamps
- Transparent hitter and pitcher standout-performance scoring functions
- Daily pipeline interfaces with graceful provider failure behavior
- Pacific-time cron endpoint scaffold
- Explicit demo labels so placeholder data cannot be confused with reported sports facts

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production data contract

Provider adapters should return only source-backed records. Each performance, article and video should retain provider/source URL plus retrieval time. If a provider fails, the UI should show `Statistics currently unavailable.` rather than fill gaps with generated values.

Suggested provider priority:

1. Sacramento State official athletics structured feeds/pages for current roster and college game records.
2. Official MLB data endpoints for MLB-affiliated identifiers, schedules, box scores and player stats where terms permit.
3. Official MiLB/team sources where reliable and licensed/allowed.
4. Approved publisher feeds/search for news metadata and canonical URLs.
5. YouTube/official team or league video endpoints only when embedding is allowed.

## Daily job

The cron route at `/api/cron/daily` determines the prior calendar date in `America/Los_Angeles`, calls provider adapters, stores source-backed performances and season stats, computes performance scores, generates constrained data-only summaries, resolves source-linked news/video, and upserts the daily archive page.

The current scaffold intentionally ships with zero live provider adapters so it cannot accidentally publish unverified data.
