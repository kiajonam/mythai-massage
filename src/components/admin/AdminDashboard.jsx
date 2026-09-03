import { CalendarDays, CheckCircle2, Clock3, Euro, Users } from "lucide-react";

const stats = [
  ["12", "Termine heute", CalendarDays],
  ["8", "Offene Anfragen", Clock3],
  ["86", "Kunden diesen Monat", Users],
  ["3.420 €", "Umsatz diesen Monat", Euro],
];

const appointments = [
  ["Anna Müller", "Thai-Massage", "10:00", "Bestätigt"],
  ["Daniel Weber", "Aroma-Öl-Massage", "11:30", "Ausstehend"],
  ["Sophie Klein", "Rücken & Nacken", "14:00", "Bestätigt"],
  ["Laura Fischer", "Thai-Massage", "17:30", "Bestätigt"],
];

export function AdminDashboard() {
  return <div className="admin-dashboard">
    <div className="admin-stats-grid">{stats.map(([value, label, Icon]) => <div className="admin-stat-card" key={label}><span className="admin-stat-icon"><Icon size={19} /></span><strong>{value}</strong><span>{label}</span></div>)}</div>
    <section className="admin-panel"><div className="admin-panel-heading"><div><span>HEUTE</span><h2>Aktuelle Termine</h2></div><button className="admin-outline-button">Alle Termine</button></div>
      <div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Kunde</th><th>Behandlung</th><th>Uhrzeit</th><th>Status</th></tr></thead><tbody>{appointments.map(([name, service, time, status]) => <tr key={`${name}-${time}`}><td><strong>{name}</strong></td><td>{service}</td><td>{time}</td><td><span className={`admin-status ${status === "Bestätigt" ? "success" : "pending"}`}>{status === "Bestätigt" && <CheckCircle2 size={14} />}{status}</span></td></tr>)}</tbody></table></div>
    </section>
  </div>;
}
