import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(helmet());
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json({ limit: "20kb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 100 }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "mythai-massage-api" });
});

app.get("/api/services", (_req, res) => {
  res.json({ services: [] });
});

app.post("/api/appointments", (req, res) => {
  const { name, email, phone, service, date, time, message } = req.body ?? {};

  if (!name || !email || !phone || !service || !date || !time) {
    return res.status(400).json({
      error: "Name, E-Mail, Telefon, Behandlung, Datum und Uhrzeit sind erforderlich."
    });
  }

  // Database + email notification will be connected in the next backend step.
  return res.status(201).json({
    message: "Terminanfrage erfolgreich entgegengenommen.",
    appointment: { name, email, phone, service, date, time, message: message || "" }
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Interner Serverfehler." });
});

app.listen(PORT, () => {
  console.log(`MyThai Massage API läuft auf http://localhost:${PORT}`);
});
