import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT ?? 3000

app.get('/', (_req, res) => {
    res.json({
        message: 'Póika Store API is running',
    })
})

app.listen(port, () => {
    console.log(`Póika Store API running on port ${port}`)
})