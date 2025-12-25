import PortalShell, { facilitatorNav } from "@/components/portal-shell";

const meetings = [
  {
    participant: "Maria Delgado",
    date: "Aug 18 · 3:00 PM",
    link: "Zoom Room A",
    notes: "Focus on calling narrative drafts."
  },
  {
    participant: "James Carter",
    date: "Aug 20 · 10:30 AM",
    link: "Google Meet",
    notes: "Review capacity assessment."
  }
];

export default function FacilitatorMeetingsPage() {
  return (
    <PortalShell
      title="Facilitator Portal"
      subtitle="Meetings"
      navItems={facilitatorNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">Schedule Meetings</h2>
              <p className="subtle-text">
                Create coaching touchpoints and track meeting notes.
              </p>
            </div>
            <button className="rounded-full bg-evergreen-600 px-5 py-2 text-sm font-semibold text-white">
              New Meeting
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {meetings.map((meeting) => (
              <div key={meeting.participant} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {meeting.participant}
                    </p>
                    <p className="text-xs text-slate-500">{meeting.date}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {meeting.link}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{meeting.notes}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
              Add your first meeting to keep momentum.
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
