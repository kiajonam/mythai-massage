import { CalendarDays, ChevronLeft, LayoutDashboard, LogOut, MessageSquare, Scissors, Users } from "lucide-react";

const navItems = [
  ["/admin/dashboard", "Dashboard", LayoutDashboard],
  ["/admin/appointments", "Termine", CalendarDays],
  ["/admin/customers", "Kunden", Users],
  ["/admin/services", "Behandlungen", Scissors],
  ["/admin/reviews", "Bewertungen", MessageSquare],
];

export function AdminLayout({ currentPage, children }) {
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand"><span>✦</span><div><strong>MY THAI</strong><small>ADMIN</small></div></div>
        <nav>
          {navItems.map(([path, label, Icon]) => (
            <button className={currentPage === path ? "active" : ""} key={path} onClick={() => navigate(path)}><Icon size={18} /><span>{label}</span></button>
          ))}
        </nav>
        <button className="admin-back" onClick={() => navigate("/")}><ChevronLeft size={16} /> Website ansehen</button>
        <button className="admin-logout" onClick={() => navigate("/admin/login")}><LogOut size={16} /> Abmelden</button>
      </aside>
      <main className="admin-main">
        <header className="admin-topbar"><div><p>MY THAI MASSAGE</p><h1>{navItems.find(([path]) => path === currentPage)?.[1] ?? "Dashboard"}</h1></div><span className="admin-avatar">MT</span></header>
        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
