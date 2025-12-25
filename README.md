# PlantRural

A mobile-first premium coaching web app for rural church planters. PlantRural guides participants through five modules from formation to multiplication, with distinct facilitator and participant portals.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (custom shadcn-style components)
- Supabase (Auth + Postgres + Storage)
- Prisma (schema + migrations)

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Copy `.env.example` to `.env.local` and update values.

```bash
cp .env.example .env.local
```

Required variables:

- `DATABASE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### 3) Run migrations and seed data

```bash
npm run prisma:migrate
npm run seed
```

### 4) Run the app

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Seeded Demo Flow

1. Facilitator creates a cohort from the **Pipeline** page.
2. Facilitator invites a participant via invite code.
3. Participant submits the Module 1 capstone (Ministry Calling Narrative) from **Work**.
4. Facilitator reviews the submission and marks **Advance** on the **Review** page.

## Security & Permissions

- Facilitators can only access cohorts they own.
- Participants can only access their own submissions and cohort resources.

Use Supabase RLS policies to enforce access at the database level. If you opt for server actions, ensure that the authenticated user ID and role are validated against cohort ownership or membership before any mutation or read.

## Project Structure

```
src/app
  /facilitator     - coach portal views
  /participant     - planter portal views
src/components
  portal-shell.tsx - shared portal chrome + navigation
prisma
  schema.prisma    - data model
  seed.ts          - module + assignment seed data
```

## Next MVP+ Ideas

- Payments and subscription management
- In-app messaging and threaded feedback
- Calendar integration (Google/Outlook)
- Cohort analytics dashboards
- Resource library tagging + search
- Participant reminders and notifications

## Notes & Assumptions

- The MVP UI uses static data for the demo; wire to Supabase/Prisma actions next.
- Module 5 capstone uses a simple completion badge (certificate PDF can be added later).
