import PortalShell, { participantNav } from "@/components/portal-shell";

const cohort = [
  {
    name: "Maria Delgado",
    stage: "Explorer",
    focus: "Calling narrative"
  },
  {
    name: "James Carter",
    stage: "Candidate",
    focus: "Vision alignment"
  }
];

export default function ParticipantCommunityPage() {
  return (
    <PortalShell
      title="Participant Portal"
      subtitle="Community"
      navItems={participantNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div>
            <h2 className="section-title">Cohort Community</h2>
            <p className="subtle-text">
              Stay connected with fellow planters in your cohort.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {cohort.map((member) => (
              <div key={member.name} className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                <p className="text-xs text-slate-500">
                  {member.stage} · Focus: {member.focus}
                </p>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
              Invite another planter to your cohort.
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
