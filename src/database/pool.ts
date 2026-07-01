import pg from 'pg'

import { env } from '../config/env.js'

const { Pool } = pg

const connectionString = env.database.url.replace('?sslmode=require', '')

export const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
})