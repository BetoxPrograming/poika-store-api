import pg from 'pg';
import { env } from '../config/env.js';
const { Pool } = pg;
export const pool = new Pool(env.database.url
    ? {
        connectionString: env.database.url,
        ssl: env.database.ssl
            ? {
                rejectUnauthorized: false,
            }
            : false,
    }
    : {
        host: env.database.host,
        port: env.database.port,
        user: env.database.user,
        password: env.database.password,
        database: env.database.name,
        ssl: env.database.ssl
            ? {
                rejectUnauthorized: false,
            }
            : false,
    });
