import express from 'express';
const app = express()
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
app.use(express.json());
app.use(cors());

import pool from './db.js'

app.get('/', async (req, res, next) => {
    try {
        const result = await pool.query(`SELECT total from totals WHERE id = 1;`)
        let ans = result.rows[0];
        console.log(ans)
        return res.json({ans})
    } catch(err){
        return next(err)
    }
})

app.post('/', async (req, res, next) => {
    try {
        const result = await pool.query('UPDATE totals SET total = total + 1 WHERE id = 1;')
        console.log(result)
    } catch(err){
        return next(err)
    }
})

export default app;