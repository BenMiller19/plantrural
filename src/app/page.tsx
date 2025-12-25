import Link from "next/link";

const modules = [
  {
    title: "Explorer",
    description: "Character & Calling"
  },
  {
    title: "Candidate",
    description: "Capacity & Vision"
  },
  {
    title: "Catalyst",
    description: "Mobilizing People & Resources"
  },
  {
    title: "Planter",
    description: "Launch & Stabilization"
  },
  {
    title: "Multiplier",
    description: "Reproducing Leaders"
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-parchment-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <header className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-evergreen-600">
            PlantRural
          </p>
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            Premium coaching for rural church planters.
          </h1>
          <p className="max-w-2xl text-base text-slate-600 md:text-lg">
            Guide each planter from formation to multiplication with a structured 5-module
            pathway, intentional coaching touchpoints, and shareable resources.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="rounded-full bg-evergreen-600 px-6 py-3 text-center text-sm font-semibold text-white shadow"
            >
              Sign in
            </Link>
            <Link
              href="/participant"
              className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-700"
            >
              View participant preview
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-5">
          {modules.map((module) => (
            <div key={module.title} className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-evergreen-600">
                {module.title}
              </p>
              <p className="mt-2 text-sm text-slate-600">{module.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
