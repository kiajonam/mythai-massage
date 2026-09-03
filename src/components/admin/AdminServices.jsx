const services = [
  ["Traditionelle Thai-Massage", "60 Min.", "69 €", "Aktiv"],
  ["Aroma-Öl-Massage", "60 Min.", "75 €", "Aktiv"],
  ["Rücken & Nacken", "30 Min.", "39 €", "Aktiv"],
];

export function AdminServices() {
  return <section className="admin-panel"><div className="admin-panel-heading"><div><span>ANGEBOT</span><h2>Behandlungen</h2></div><button className="admin-primary">+ Behandlung</button></div><div className="admin-table-wrapper"><table className="admin-table"><thead><tr><th>Behandlung</th><th>Dauer</th><th>Preis</th><th>Status</th><th></th></tr></thead><tbody>{services.map(([name,duration,price,status])=><tr key={name}><td><strong>{name}</strong></td><td>{duration}</td><td>{price}</td><td><span className="admin-status success">{status}</span></td><td><button className="admin-row-action">Bearbeiten</button></td></tr>)}</tbody></table></div></section>;
}
