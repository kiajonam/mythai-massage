# MyThai Massage Backend

Express API foundation for the MyThai Massage website.

## Current endpoints

- `GET /api/health` - health check
- `GET /api/services` - service catalogue placeholder
- `POST /api/appointments` - appointment request validation

## Next backend layers

1. SQLite database
2. Services, appointments and customers repositories
3. Email notifications via SMTP
4. Admin authentication
5. Admin CRUD endpoints
6. Frontend API integration

The implementation intentionally follows the separation used in the KFZ-Technik project while keeping the massage domain independent.
