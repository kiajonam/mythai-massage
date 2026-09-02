const rows = [
  ["Anna Müller", "Thai-Massage", "04.09.2026", "10:00", "Bestätigt"],
  ["Daniel Weber", "Aroma-Öl-Massage", "04.09.2026", "11:30", "Ausstehend"],
  ["Sophie Klein", "Rücken & Nacken", "04.09.2026", "14:00", "Bestätigt"],
  ["Laura Fischer", "Thai-Massage", "04.09.2026", "17:30", "Bestätigt"],
];

export function AdminAppointments() {
  return <section className="admin-panel"><div className="admin-panel-heading"><div><span>VERWALTUNG</span><h2>Termine</h2></div><button className="admin-primary">+ Neuer Termin</button></div><div className="admin-filters"><input placeholder="Kunden oder Behandlung suchen..." /><select defaultValue="all"><option value="all">Alle Status</option><option>Bestätigt</option><option>Ausstehend</option></select></div><div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Kunde</th><th>Behandlung</th><th>Datum</th><th>Zeit</th><th>Status</th><th></th></tr></thead><tbody>{rows.map(([name, service, date, time, status]) => <tr key={`${name}-${date}-${time}`}><td><strong>{name}</strong></td><td>{service}</td><td>{date}</td><td>{time}</td><td><span className={`admin-status ${status === "Bestätigt" ? "success" : "pending"}`}>{status}</span></td><td><button className="admin-row-action">Ansehen</button></td></tr>)}</tbody></table></div></section>;
}
