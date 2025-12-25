import PortalShell, { facilitatorNav } from "@/components/portal-shell";

const resources = [
  {
    title: "Calling Narrative Guide",
    module: "Explorer",
    type: "PDF",
    visibility: "Cohort"
  },
  {
    title: "Launch Team Checklist",
    module: "Catalyst",
    type: "Link",
    visibility: "Module"
  }
];

export default function FacilitatorResourcesPage() {
  return (
    <PortalShell
      title="Facilitator Portal"
      subtitle="Resources"
      navItems={facilitatorNav}
    >
      <div className="space-y-6">
        <section className="card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">Resource Library</h2>
              <p className="subtle-text">
                Upload files or link resources by cohort or module.
              </p>
            </div>
            <button className="rounded-full bg-evergreen-600 px-5 py-2 text-sm font-semibold text-white">
              Add Resource
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {resources.map((resource) => (
              <div key={resource.title} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{resource.title}</p>
                    <p className="text-xs text-slate-500">Module: {resource.module}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {resource.type}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {resource.visibility}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
              Upload your first resource to support participants.
            </div>
          </div>
        </section>
      </div>
    </PortalShell>
  );
}
