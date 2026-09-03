# My Thai Massage Admin

Admin routes mirror the management architecture used in the KFZ-Technik project, adapted for a massage studio.

- `/admin/login` Admin entry
- `/admin/dashboard` KPIs and today's appointments
- `/admin/appointments` appointment management
- `/admin/customers` customer management
- `/admin/services` treatment/pricing management
- `/admin/reviews` review moderation

Current UI uses local demo data. The intended backend integration is:

`Website booking form -> POST /api/appointments -> database -> Admin appointments/dashboard`

Future authentication should use a real server-side session or JWT with protected admin endpoints. The current login is intentionally a UI shell and does not provide security.
