require('dotenv').config()
const { Client } = require('pg')

const db = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDB,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
})

exports.db = db
