import Link from "next/link";
import { ReactNode } from "react";
import { CalendarClock, ClipboardList, LayoutGrid, Library, Users } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function PortalShell({
  title,
  subtitle,
  navItems,
  children
}: {
  title: string;
  subtitle: string;
  navItems: NavItem[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-parchment-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-evergreen-600">
              PlantRural
            </p>
            <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
            <p className="text-sm text-slate-500">{subtitle}</p>
          </div>
          <Link
            href="/login"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 md:inline"
          >
            Switch account
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-6 px-6 py-8">
        <aside className="hidden w-56 flex-col gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-white"
            >
              <item.icon className="h-4 w-4 text-evergreen-600" />
              {item.label}
            </Link>
          ))}
        </aside>
        <div className="flex-1">{children}</div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-around px-6 py-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-medium text-slate-600">
              <item.icon className="mx-auto h-5 w-5 text-evergreen-600" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export const facilitatorNav: NavItem[] = [
  { label: "Pipeline", href: "/facilitator", icon: LayoutGrid },
  { label: "Meetings", href: "/facilitator/meetings", icon: CalendarClock },
  { label: "Resources", href: "/facilitator/resources", icon: Library },
  { label: "Review", href: "/facilitator/review", icon: ClipboardList }
];

export const participantNav: NavItem[] = [
  { label: "The Path", href: "/participant", icon: LayoutGrid },
  { label: "Meetings", href: "/participant/meetings", icon: CalendarClock },
  { label: "Work", href: "/participant/work", icon: ClipboardList },
  { label: "Community", href: "/participant/community", icon: Users }
];
