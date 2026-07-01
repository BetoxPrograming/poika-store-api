import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { pool } from './pool.js'

const filePath = process.argv[2]

if (!filePath) {
    console.error('SQL file path is required.')
    process.exit(1)
}

const absolutePath = resolve(filePath)
const sql = await readFile(absolutePath, 'utf8')

await pool.query(sql)
await pool.end()

console.log(`SQL file executed successfully: ${filePath}`)