import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health.routes.js';
export const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => {
    res.json({
        message: 'Póika Store API is running',
    });
});
app.use('/api/health', healthRouter);
