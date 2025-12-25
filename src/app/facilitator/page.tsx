import PortalShell, { facilitatorNav } from "@/components/portal-shell";

const participants = [
  {
    name: "Maria Delgado",
    module: "Explorer",
    lastActivity: "Aug 12",
    nextMeeting: "Aug 18",
    status: "Advance"
  },
  {
    name: "James Carter",
    module: "Candidate",
    lastActivity: "Aug 10",
    nextMeeting: "Aug 20",
    status: "Delay"
  },
  {
    name: "Aisha Khan",
    module: "Catalyst",
    lastActivity: "Aug 9",
    nextMeeting: "Aug 19",
    status: "Redirect"
  }
];

export default function FacilitatorPipelinePage() {
  return (
    <PortalShell
      title="Facilitator Portal"
      subtitle="Pipeline overview"
      navItems={facilitatorNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">Cohort Pipeline</h2>
              <p className="subtle-text">
                Track current module stages and move participants forward.
              </p>
            </div>
            <button className="rounded-full bg-evergreen-600 px-5 py-2 text-sm font-semibold text-white">
              Create Cohort
            </button>
          </div>
          <div className="mt-6 grid gap-4">
            {participants.map((participant) => (
              <div key={participant.name} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {participant.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      Module: {participant.module} · Last activity {participant.lastActivity}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Next: {participant.nextMeeting}
                    </span>
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Advance
                    </button>
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Delay
                    </button>
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Redirect
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
              Invite participants to see their progress appear here.
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
