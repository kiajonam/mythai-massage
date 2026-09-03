# Backend plan

The frontend is intentionally prepared for a backend similar in separation of concerns to the KFZ-Technik Köln project: public website, appointment workflow, admin area, service management, customer records and reviews. The reference project currently uses separate appointment, contact, legal, cookie and admin components, with admin routes separated from the public application. The massage project will keep those boundaries while replacing workshop-specific concepts with services, customers, appointments and availability.

Planned API modules:

- `POST /api/appointments`
- `GET /api/appointments`
- `PATCH /api/appointments/:id`
- `GET /api/services`
- `POST /api/services`
- `PATCH /api/services/:id`
- `GET /api/customers`
- `GET /api/reviews`
- `POST /api/reviews`
- admin authentication and protected admin routes

The website does not currently fake a backend response. The booking form is a UI shell until the Node/Express backend is connected.
