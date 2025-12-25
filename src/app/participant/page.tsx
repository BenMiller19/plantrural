import PortalShell, { participantNav } from "@/components/portal-shell";

const modules = [
  {
    title: "Explorer",
    description: "Character & Calling",
    status: "In progress",
    checklist: [
      "Spiritual formation rhythms",
      "Calling narrative draft",
      "Coach reflection"
    ]
  },
  {
    title: "Candidate",
    description: "Capacity & Vision",
    status: "Next",
    checklist: [
      "Vision clarity assessment",
      "Ministry plan outline"
    ]
  },
  {
    title: "Catalyst",
    description: "Mobilizing People & Resources",
    status: "Upcoming",
    checklist: [
      "Launch team map",
      "Funding strategy"
    ]
  }
];

export default function ParticipantPathPage() {
  return (
    <PortalShell
      title="Participant Portal"
      subtitle="The Path"
      navItems={participantNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div>
            <h2 className="section-title">Your 5-Module Journey</h2>
            <p className="subtle-text">
              Stay on pace and mark your progress as you complete each session.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {modules.map((module) => (
              <div key={module.title} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {module.title}
                    </p>
                    <p className="text-xs text-slate-500">{module.description}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {module.status}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {module.checklist.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-evergreen-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
              Share your progress updates in your next coaching meeting.
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
