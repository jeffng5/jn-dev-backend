const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(express.json());
app.use(cors());

const pool = require('./db.js')
pool.connect();

app.post('/api/count', async (req, res, next) => {
    try {
        const result = await pool.query(`UPDATE totals SET total = total + 1 RETURNING *`)
        let visitorCount = result.rows
        return res.json({visitorCount})
    } catch (err) {
        return next(err)
    }
})

app.get('/api/count', async (req, res, next) => {
    try {
        const result = await pool.query(`SELECT total FROM totals`)
        let ans = result.rows;
        return res.json({ans})
    } catch(err){
        return next(err)
    }
})

module.exports = app;