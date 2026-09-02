import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import db from "../db/database.js";
import adminAppointmentsRouter from "./routes/adminAppointments.js";

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(helmet());
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json({ limit: "20kb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 100 }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "mythai-massage-api", database: "sqlite" });
});

app.get("/api/services", (_req, res) => {
  const services = db.prepare(`
    SELECT id, name, slug, description, duration_minutes AS durationMinutes,
           price_cents AS priceCents
    FROM services
    WHERE is_active = 1
    ORDER BY id ASC
  `).all();

  res.json({ services });
});

app.post("/api/appointments", (req, res) => {
  const { name, email, phone, service, date, time, message } = req.body ?? {};

  if (!name || !email || !phone || !service || !date || !time) {
    return res.status(400).json({
      error: "Name, E-Mail, Telefon, Behandlung, Datum und Uhrzeit sind erforderlich."
    });
  }

  const selectedService = db.prepare(`
    SELECT id, name FROM services WHERE (slug = ? OR name = ?) AND is_active = 1
  `).get(service, service);

  if (!selectedService) {
    return res.status(400).json({ error: "Die ausgewählte Behandlung wurde nicht gefunden." });
  }

  const existingAppointment = db.prepare(`
    SELECT id FROM appointments
    WHERE appointment_date = ?
      AND appointment_time = ?
      AND status IN ('pending', 'confirmed')
  `).get(date, time);

  if (existingAppointment) {
    return res.status(409).json({ error: "Dieser Termin ist leider bereits vergeben." });
  }

  const normalizedName = String(name).trim().split(/\s+/);
  const firstName = normalizedName.shift() || "";
  const lastName = normalizedName.join(" ") || "-";

  const appointmentId = db.transaction(() => {
    let customer = db.prepare("SELECT id FROM customers WHERE email = ? LIMIT 1").get(email.trim().toLowerCase());

    if (customer) {
      db.prepare(`
        UPDATE customers
        SET first_name = ?, last_name = ?, phone = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `).run(firstName, lastName, phone.trim(), customer.id);
    } else {
      const result = db.prepare(`
        INSERT INTO customers (first_name, last_name, email, phone)
        VALUES (?, ?, ?, ?)
      `).run(firstName, lastName, email.trim().toLowerCase(), phone.trim());
      customer = { id: result.lastInsertRowid };
    }

    const result = db.prepare(`
      INSERT INTO appointments
        (customer_id, service_id, appointment_date, appointment_time, customer_message)
      VALUES (?, ?, ?, ?, ?)
    `).run(customer.id, selectedService.id, date, time, String(message || "").trim());

    return result.lastInsertRowid;
  })();

  return res.status(201).json({
    message: "Terminanfrage erfolgreich entgegengenommen.",
    appointmentId,
    appointment: { name, email, phone, service: selectedService.name, date, time, message: message || "" }
  });
});

app.use("/api/admin", adminAppointmentsRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Interner Serverfehler." });
});

app.listen(PORT, () => {
  console.log(`MyThai Massage API läuft auf http://localhost:${PORT}`);
});
