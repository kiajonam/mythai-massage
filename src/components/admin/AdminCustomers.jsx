const customers = [
  ["Anna Müller", "anna@example.de", "+49 171 2345678", "8 Termine", "Aktiv"],
  ["Daniel Weber", "daniel@example.de", "+49 172 4567890", "5 Termine", "Aktiv"],
  ["Sophie Klein", "sophie@example.de", "+49 173 9876543", "3 Termine", "Aktiv"],
  ["Laura Fischer", "laura@example.de", "+49 174 1112233", "1 Termin", "Neu"],
];

export function AdminCustomers() {
  return <section className="admin-panel"><div className="admin-panel-heading"><div><span>KUNDEN</span><h2>Kundenverwaltung</h2></div><button className="admin-primary">+ Kunde anlegen</button></div><div className="admin-filters"><input placeholder="Name, E-Mail oder Telefon suchen..." /></div><div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Kunde</th><th>E-Mail</th><th>Telefon</th><th>Termine</th><th>Status</th></tr></thead><tbody>{customers.map(([name,email,phone,bookings,status])=><tr key={email}><td><strong>{name}</strong></td><td>{email}</td><td>{phone}</td><td>{bookings}</td><td><span className={`admin-status ${status === "Neu" ? "pending" : "success"}`}>{status}</span></td></tr>)}</tbody></table></div></section>;
}
