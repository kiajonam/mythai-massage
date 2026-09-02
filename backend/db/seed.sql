INSERT OR IGNORE INTO services (name, slug, description, duration_minutes, price_cents, is_active) VALUES
  ('Thai Massage', 'thai-massage', 'Traditionelle Thai-Massage mit gezielten Dehnungen und Drucktechniken.', 60, 6000, 1),
  ('Aroma Oil Massage', 'aroma-oil-massage', 'Sanfte Ganzkörpermassage mit warmem Aromaöl für tiefe Entspannung.', 60, 6500, 1),
  ('Deep Relax Massage', 'deep-relax-massage', 'Ruhige, intensive Behandlung zur Entspannung von Muskeln und Geist.', 90, 9000, 1),
  ('Couples Massage', 'couples-massage', 'Entspannende Massage für zwei Personen in einer privaten Atmosphäre.', 60, 12000, 1);

INSERT OR IGNORE INTO reviews (customer_name, rating, text, is_published) VALUES
  ('Anna M.', 5, 'Sehr angenehme Atmosphäre und eine hervorragende Massage.', 1),
  ('Daniel K.', 5, 'Professionell, ruhig und sehr entspannend. Ich komme gerne wieder.', 1),
  ('Sophie R.', 5, 'Eine wunderschöne Erfahrung von Anfang bis Ende.', 1);
