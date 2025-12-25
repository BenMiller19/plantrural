import PortalShell, { facilitatorNav } from "@/components/portal-shell";

const reviews = [
  {
    participant: "Maria Delgado",
    assignment: "Ministry Calling Narrative",
    module: "Explorer",
    status: "Submitted"
  },
  {
    participant: "James Carter",
    assignment: "Ministry Plan",
    module: "Candidate",
    status: "Revision Requested"
  }
];

export default function FacilitatorReviewPage() {
  return (
    <PortalShell
      title="Facilitator Portal"
      subtitle="Reviews"
      navItems={facilitatorNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">Module Reviews</h2>
              <p className="subtle-text">
                Approve submissions and record review decisions.
              </p>
            </div>
            <button className="rounded-full bg-evergreen-600 px-5 py-2 text-sm font-semibold text-white">
              Open Review Queue
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {reviews.map((review) => (
              <div key={review.participant} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {review.participant}
                    </p>
                    <p className="text-xs text-slate-500">
                      {review.assignment} · {review.module}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {review.status}
                    </span>
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Approve
                    </button>
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Request Revision
                    </button>
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Advance
                    </button>
                  </div>
                </div>
                <textarea
                  className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder="Add feedback notes..."
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
