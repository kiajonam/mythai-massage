import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AdminApp } from "./components/admin/AdminApp";

const services = [
  { title: "Traditionelle Thai-Massage", text: "Gezielte Drucktechniken und passive Dehnungen für neue Leichtigkeit.", duration: "60 Min.", price: "69 €" },
  { title: "Aroma-Öl-Massage", text: "Sanfte Massage mit warmem Öl für tiefe Entspannung und Wohlgefühl.", duration: "60 Min.", price: "75 €" },
  { title: "Rücken & Nacken", text: "Fokus auf verspannte Bereiche nach einem langen Arbeitstag.", duration: "30 Min.", price: "39 €" },
];
const testimonials = [
  { quote: "Sehr ruhige Atmosphäre, professionell und unglaublich entspannend.", name: "Julia M.", meta: "Google Bewertung" },
  { quote: "Die Behandlung war genau richtig. Ich habe mich sofort wohlgefühlt.", name: "Daniel K.", meta: "Google Bewertung" },
  { quote: "Schönes Studio, herzlicher Empfang und eine wirklich gute Massage.", name: "Sophie R.", meta: "Google Bewertung" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  if (currentPage.startsWith("/admin")) {
    return <AdminApp currentPage={currentPage} />;
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="Zur Startseite"><span className="brand-mark"><Sparkles size={18} /></span><span><strong>MY THAI</strong><small>MASSAGE &amp; WELLNESS</small></span></button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <button onClick={() => scrollTo("services")}>Behandlungen</button><button onClick={() => scrollTo("about")}>Über uns</button><button onClick={() => scrollTo("reviews")}>Bewertungen</button><button onClick={() => scrollTo("contact")}>Kontakt</button><button className="nav-book" onClick={() => scrollTo("booking")}>Termin buchen <ArrowRight size={16} /></button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Menü öffnen">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero"><div className="hero-overlay" /><div className="container hero-inner"><div className="hero-copy"><span className="eyebrow"><Sparkles size={15} /> AUTHENTISCHE THAI-MASSAGE</span><h1>Ruhe für den Körper.<br /><em>Balance für den Geist.</em></h1><p>Entdecke traditionelle Thai-Massage in einer modernen, warmen Atmosphäre. Zeit nur für dich.</p><div className="hero-actions"><button className="button button-gold" onClick={() => scrollTo("booking")}>Termin buchen <ArrowRight size={18} /></button><button className="button button-ghost" onClick={() => scrollTo("services")}>Behandlungen ansehen</button></div></div><div className="hero-card"><span>HEUTE VERFÜGBAR</span><strong>Dein Moment<br />für Entspannung.</strong><div className="hero-card-meta"><Clock3 size={16} /> Mo–Sa · 10:00–20:00</div><button onClick={() => scrollTo("booking")}>Schnell buchen <ArrowRight size={16} /></button></div></div></section>
        <section className="trust-bar"><div className="container trust-grid"><div><Check size={18} /><span>Erfahrene Therapeutinnen</span></div><div><Check size={18} /><span>Hygiene &amp; Qualität</span></div><div><Check size={18} /><span>Individuelle Behandlung</span></div><div><Check size={18} /><span>5,0 ★ Kundenzufriedenheit</span></div></div></section>
        <section id="services" className="section services-section"><div className="container"><div className="section-head centered"><span className="eyebrow purple"><Sparkles size={15} /> UNSERE BEHANDLUNGEN</span><h2>Wohlfühlen, <em>ganz nach deinem Rhythmus.</em></h2><p>Wähle die Behandlung, die zu deinem Körper und deinem aktuellen Bedürfnis passt.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="service-icon"><Sparkles size={22} /></div><div className="service-top"><span>{service.duration}</span><strong>{service.price}</strong></div><h3>{service.title}</h3><p>{service.text}</p><button onClick={() => scrollTo("booking")}>Termin wählen <ArrowRight size={16} /></button></article>)}</div></div></section>
        <section id="about" className="about-section"><div className="container about-grid"><div className="about-photo photo-one"><span>Tradition</span></div><div className="about-copy"><span className="eyebrow purple"><Sparkles size={15} /> MY THAI MASSAGE</span><h2>Tradition trifft <em>moderne Ruhe.</em></h2><p>Unsere Arbeit verbindet klassische Thai-Massagetechniken mit einem modernen Spa-Erlebnis. Von der Begrüßung bis zum letzten Moment soll sich alles ruhig, hochwertig und persönlich anfühlen.</p><div className="about-points"><div><span>01</span><div><strong>Mit Zeit für dich</strong><p>Keine Hektik. Jede Behandlung wird auf dich abgestimmt.</p></div></div><div><span>02</span><div><strong>Mit echter Erfahrung</strong><p>Traditionelle Techniken und ein sicherer, professioneller Umgang.</p></div></div></div><button className="text-link" onClick={() => scrollTo("contact")}>Mehr über uns <ArrowRight size={16} /></button></div></div></section>
        <section id="booking" className="booking-section"><div className="container booking-wrap"><div className="booking-copy"><span className="eyebrow">DEIN TERMIN</span><h2>Ein kleiner Schritt.<br /><em>Ein deutlich besseres Gefühl.</em></h2><p>Buche unkompliziert deinen Wunschtermin. Wir melden uns zur Bestätigung persönlich bei dir.</p><div className="booking-info"><CalendarDays size={19} /><span>Terminanfragen innerhalb der Öffnungszeiten</span></div><div className="booking-info"><Phone size={19} /><span>Telefon: +49 221 12345678</span></div></div><form className="booking-form" onSubmit={(e) => e.preventDefault()}><div className="form-title"><span>Schnellanfrage</span><small>Antwort während der Öffnungszeiten</small></div><label>Dein Name<input placeholder="Vor- und Nachname" /></label><div className="form-row"><label>Telefon<input placeholder="+49 ..." /></label><label>Wunschtermin<input type="date" /></label></div><label>Behandlung<select defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Traditionelle Thai-Massage · 60 Min.</option><option>Aroma-Öl-Massage · 60 Min.</option><option>Rücken &amp; Nacken · 30 Min.</option></select></label><label>Nachricht<textarea rows="3" placeholder="Wunschzeit oder besondere Hinweise" /></label><button className="button button-gold full" type="submit">Anfrage senden <ArrowRight size={18} /></button><small className="form-note">Mit dem Absenden entsteht noch keine verbindliche Reservierung.</small></form></div></section>
        <section id="reviews" className="section reviews-section"><div className="container"><div className="section-head centered"><span className="eyebrow purple"><Star size={15} /> GÄSTE ÜBER UNS</span><h2>Entspannung, die <em>man weiterempfiehlt.</em></h2></div><div className="rating-line"><strong>5,0</strong><span className="stars">★★★★★</span><span>auf Google · basierend auf Kundenbewertungen</span></div><div className="reviews-grid">{testimonials.map((review) => <article className="review-card" key={review.name}><div className="review-stars">★★★★★</div><p>“{review.quote}”</p><div><strong>{review.name}</strong><span>{review.meta}</span></div></article>)}</div></div></section>
        <section id="contact" className="contact-section"><div className="container contact-grid"><div><span className="eyebrow purple">BESUCH UNS</span><h2>Dein Rückzugsort<br /><em>mitten in der Stadt.</em></h2><p>Wir freuen uns, dich in unserem Studio willkommen zu heißen.</p><div className="contact-details"><div><MapPin size={20} /><span>Beispielstraße 12<br />50667 Köln</span></div><div><Phone size={20} /><span>+49 221 12345678</span></div><div><Clock3 size={20} /><span>Mo–Sa · 10:00–20:00<br />Sonntag · geschlossen</span></div></div></div><div className="map-card"><div className="map-pin"><MapPin size={24} /></div><span>MY THAI MASSAGE</span><small>Köln · Innenstadt</small><button onClick={() => window.open("https://www.google.com/maps", "_blank")}>Route öffnen <ArrowRight size={16} /></button></div></div></section>
      </main>
      <footer className="footer"><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><Sparkles size={18} /></span><span><strong>MY THAI</strong><small>MASSAGE &amp; WELLNESS</small></span></div><p>Ruhe für den Körper. Balance für den Geist.</p></div><div><strong>Navigation</strong><button onClick={() => scrollTo("services")}>Behandlungen</button><button onClick={() => scrollTo("about")}>Über uns</button><button onClick={() => scrollTo("booking")}>Termin buchen</button></div><div><strong>Kontakt</strong><span>+49 221 12345678</span><span>hello@mythai-massage.de</span><span>Beispielstraße 12 · Köln</span></div><div><strong>Folge uns</strong><div className="socials"><a href="#" aria-label="Social Media">Social</a><a href="mailto:hello@mythai-massage.de" aria-label="E-Mail"><Mail size={18} /></a></div></div></div><div className="container footer-bottom"><span>© 2026 My Thai Massage</span><span>Impressum · Datenschutz · Cookie-Einstellungen</span></div></footer>
    </div>
  );
}
export default App;
