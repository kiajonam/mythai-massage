const reviews = [
  ["Julia M.", "Sehr ruhige Atmosphäre, professionell und unglaublich entspannend.", "5 Sterne", "Veröffentlicht"],
  ["Daniel K.", "Die Behandlung war genau richtig. Ich habe mich sofort wohlgefühlt.", "5 Sterne", "Veröffentlicht"],
  ["Sophie R.", "Schönes Studio, herzlicher Empfang und eine wirklich gute Massage.", "5 Sterne", "Prüfung"],
];

export function AdminReviews() {
  return <section className="admin-panel"><div className="admin-panel-heading"><div><span>KUNDENFEEDBACK</span><h2>Bewertungen</h2></div><button className="admin-outline-button">Moderation</button></div><div className="admin-review-list">{reviews.map(([name,text,rating,status])=><article className="admin-review" key={name}><div className="admin-review-top"><strong>{name}</strong><span>{rating}</span><small className={status === "Veröffentlicht" ? "published" : "pending-text"}>{status}</small></div><p>“{text}”</p><div className="admin-review-actions"><button>Freigeben</button><button>Ausblenden</button></div></article>)}</div></section>;
}
