export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-parchment-50 px-6 py-12">
      <div className="w-full max-w-md space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-evergreen-600">
            PlantRural
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">Sign in</h1>
          <p className="mt-2 text-sm text-slate-500">
            Continue to your facilitator or participant portal.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </label>
            <input
              type="email"
              placeholder="you@plantrural.org"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-evergreen-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-evergreen-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-evergreen-600 px-6 py-3 text-sm font-semibold text-white shadow"
          >
            Sign in
          </button>
        </form>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-xs text-emerald-700">
          Demo tip: choose a portal from the navigation preview links.
        </div>
      </div>
    </main>
  );
}
