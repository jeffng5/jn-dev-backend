const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(express.json());
app.use(cors());

const pool = require('./db.js')


app.post('/', async (req, res, next) => {
    try {
        const result = await pool.query(`UPDATE totals SET total = total + 1 RETURNING total`)
        let visitorCount = result.rows
        console.log(result, visitorCount)
        return res.json({visitorCount})
    } catch (err) {
        return next(err)
    }
})

// app.post('/api/count', async (req, res, next) => {
//     try {
//         const result = await pool.query(`INSERT INTO totals (total) VALUES (1)`)
//         let ans = result.rows;
//         return res.json({ans})
//     } catch(err){
//         return next(err)
//     }
// })

module.exports = app;