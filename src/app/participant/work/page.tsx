import PortalShell, { participantNav } from "@/components/portal-shell";

const assignments = [
  {
    title: "Ministry Calling Narrative",
    module: "Explorer",
    kind: "Capstone",
    status: "Due"
  },
  {
    title: "Ministry Plan",
    module: "Candidate",
    kind: "Capstone",
    status: "Upcoming"
  }
];

const resources = [
  {
    title: "Calling Narrative Guide",
    module: "Explorer",
    type: "PDF"
  },
  {
    title: "Launch Team Checklist",
    module: "Catalyst",
    type: "Link"
  }
];

export default function ParticipantWorkPage() {
  return (
    <PortalShell
      title="Participant Portal"
      subtitle="Work"
      navItems={participantNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">Assignments & Capstones</h2>
              <p className="subtle-text">
                Submit your work and track feedback from your facilitator.
              </p>
            </div>
            <button className="rounded-full bg-evergreen-600 px-5 py-2 text-sm font-semibold text-white">
              Submit Work
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {assignments.map((assignment) => (
              <div key={assignment.title} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {assignment.title}
                    </p>
                    <p className="text-xs text-slate-500">Module: {assignment.module}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {assignment.kind}
                    </span>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {assignment.status}
                    </span>
                  </div>
                </div>
                <textarea
                  className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder="Write your submission here..."
                />
                <button className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                  Upload supporting file
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="card p-6">
          <div>
            <h2 className="section-title">Resources</h2>
            <p className="subtle-text">Work through tools shared by your facilitator.</p>
          </div>
          <div className="mt-6 space-y-3">
            {resources.map((resource) => (
              <div key={resource.title} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{resource.title}</p>
                    <p className="text-xs text-slate-500">Module: {resource.module}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {resource.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
