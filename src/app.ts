import express from 'express'
import cors from 'cors'

import { databaseRouter } from './routes/database.routes.js'
import { healthRouter } from './routes/health.routes.js'
import { categoryRouter } from './routes/category.routes.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
    res.json({
        message: 'Póika Store API is running',
    })
})

app.use('/api/health', healthRouter)
app.use('/api/database', databaseRouter)
app.use('/api/categories', categoryRouter)