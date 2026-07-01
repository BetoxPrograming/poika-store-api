import { Router } from 'express';
import { pool } from '../database/pool.js';
export const databaseRouter = Router();
databaseRouter.get('/health', async (_req, res) => {
    const result = await pool.query('SELECT NOW() AS current_time');
    res.json({
        status: 'ok',
        database: 'connected',
        currentTime: result.rows[0].current_time,
    });
});
