# Development Notes

## Frontend QA rules

- Before adding an icon from `lucide-react`, verify that the installed package exports that icon. Do not assume brand/social icons are available in Lucide.
- Before considering a frontend change complete, run `npm run build` and fix all compile/import errors before moving on.
- When a dependency-related error appears, check the installed package version and its actual exports instead of fixing icons one by one.
- Keep `main` untouched while the website is being reviewed. Development changes stay on `feature/luxury-massage-site` until explicitly approved.

## Current UI review notes

- Desktop hero has a strong premium direction: dark overlay, warm gold accent, serif headline, clear booking CTA.
- The mobile navigation currently opens as a very large full-width panel and needs visual refinement so it feels intentional and compact.
- The booking form currently collects name, phone, date, service and message, but the backend appointment endpoint also requires email and appointment time. Frontend and backend fields must be aligned before real booking is enabled.
- Several homepage details are still placeholder content, including the example address, phone number, email, Google rating copy, and map destination. These must be replaced with the real business information before launch.
- Social links should use real destinations only after the business accounts are confirmed.
- The booking form currently prevents submission in the frontend and is not yet connected to the API. This is intentional until the UI and data fields are finalized.

## Release checklist

1. Verify all frontend imports and run `npm run build`.
2. Replace placeholder business data with verified real data.
3. Align booking form fields with the API contract.
4. Connect booking form to the backend API.
5. Add admin authentication before exposing admin endpoints publicly.
6. Test responsive layouts on desktop, tablet and mobile.
7. Test booking conflict handling and validation.
8. Review legal pages: Impressum, Datenschutz and cookie consent.
