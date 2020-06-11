require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDB,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  max: 20,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
  maxUses: 7500,
});

db.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

exports.db = db;
