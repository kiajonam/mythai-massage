import { useState } from "react";
import { ArrowRight, LockKeyhole, Sparkles } from "lucide-react";

export function AdminLogin() {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    window.history.pushState({}, "", "/admin/dashboard");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <div className="admin-brand"><span><Sparkles size={18} /></span><div><strong>MY THAI</strong><small>ADMIN PANEL</small></div></div>
        <p className="admin-eyebrow"><LockKeyhole size={14} /> MANAGEMENT</p>
        <h1>Willkommen zurück.</h1>
        <p className="admin-muted">Verwalte Termine, Kunden, Behandlungen und Bewertungen.</p>
        <form onSubmit={handleSubmit} className="admin-form">
          <label>E-Mail<input type="email" placeholder="admin@mythai-massage.de" required /></label>
          <label>Passwort<input type="password" placeholder="••••••••" required /></label>
          {error && <p className="admin-error">{error}</p>}
          <button type="submit">Anmelden <ArrowRight size={16} /></button>
        </form>
        <small className="admin-demo-note">Demo-Login: Die echte Authentifizierung wird im Backend ergänzt.</small>
      </section>
    </main>
  );
}
