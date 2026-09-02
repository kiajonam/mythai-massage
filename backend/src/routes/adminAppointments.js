import { Router } from "express";
import db from "../../db/database.js";

const router = Router();
const allowedStatuses = new Set(["pending", "confirmed", "completed", "cancelled"]);

router.get("/appointments", (_req, res) => {
  const appointments = db.prepare(`
    SELECT
      a.id,
      a.appointment_date AS date,
      a.appointment_time AS time,
      a.status,
      a.customer_message AS message,
      a.created_at AS createdAt,
      c.id AS customerId,
      TRIM(c.first_name || ' ' || c.last_name) AS customerName,
      c.email,
      c.phone,
      s.id AS serviceId,
      s.name AS serviceName,
      s.duration_minutes AS durationMinutes,
      s.price_cents AS priceCents
    FROM appointments a
    JOIN customers c ON c.id = a.customer_id
    JOIN services s ON s.id = a.service_id
    ORDER BY a.appointment_date ASC, a.appointment_time ASC
  `).all();

  res.json({ appointments });
});

router.patch("/appointments/:id/status", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body ?? {};

  if (!Number.isInteger(id) || !allowedStatuses.has(status)) {
    return res.status(400).json({ error: "Ungültige Termin-ID oder ungültiger Status." });
  }

  const result = db.prepare(`
    UPDATE appointments
    SET status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(status, id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "Termin nicht gefunden." });
  }

  const appointment = db.prepare(`
    SELECT id, appointment_date AS date, appointment_time AS time, status
    FROM appointments WHERE id = ?
  `).get(id);

  return res.json({ appointment });
});

router.delete("/appointments/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Ungültige Termin-ID." });
  }

  const result = db.prepare("DELETE FROM appointments WHERE id = ?").run(id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "Termin nicht gefunden." });
  }

  res.status(204).send();
});

router.get("/stats", (_req, res) => {
  const stats = db.prepare(`
    SELECT
      COUNT(*) AS total,
      SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending,
      SUM(CASE WHEN status = 'confirmed' THEN 1 ELSE 0 END) AS confirmed,
      SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed,
      SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled
    FROM appointments
  `).get();

  const customers = db.prepare("SELECT COUNT(*) AS count FROM customers").get();
  const services = db.prepare("SELECT COUNT(*) AS count FROM services WHERE is_active = 1").get();

  res.json({
    appointments: stats,
    customers: customers.count,
    activeServices: services.count
  });
});

export default router;
