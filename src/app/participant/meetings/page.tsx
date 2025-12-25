import PortalShell, { participantNav } from "@/components/portal-shell";

const meetings = [
  {
    date: "Aug 18 · 3:00 PM",
    facilitator: "Coach Leah",
    agenda: "Calling narrative feedback",
    sharedNotes: "Draft is strong. Add a paragraph on rural context."
  },
  {
    date: "Aug 20 · 10:30 AM",
    facilitator: "Coach Leah",
    agenda: "Ministry plan outline",
    sharedNotes: "Bring updated SWOT analysis."
  }
];

export default function ParticipantMeetingsPage() {
  return (
    <PortalShell
      title="Participant Portal"
      subtitle="Meetings"
      navItems={participantNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div>
            <h2 className="section-title">Upcoming Meetings</h2>
            <p className="subtle-text">
              View coaching details and shared notes from your facilitator.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {meetings.map((meeting) => (
              <div key={meeting.date} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{meeting.date}</p>
                    <p className="text-xs text-slate-500">{meeting.facilitator}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {meeting.agenda}
                  </span>
                </div>
                <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-xs text-emerald-700">
                  Shared notes: {meeting.sharedNotes}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
              Your facilitator will share meeting details soon.
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
