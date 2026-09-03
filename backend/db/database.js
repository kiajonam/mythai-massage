import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbDirectory = path.join(__dirname, 'data');
const dbPath = path.join(dbDirectory, 'massage.sqlite');
const schemaPath = path.join(__dirname, 'schema.sql');
const seedPath = path.join(__dirname, 'seed.sql');

fs.mkdirSync(dbDirectory, { recursive: true });

export const db = new Database(dbPath);
db.pragma('foreign_keys = ON');
db.pragma('journal_mode = WAL');

db.exec(fs.readFileSync(schemaPath, 'utf8'));
db.exec(fs.readFileSync(seedPath, 'utf8'));

export default db;
