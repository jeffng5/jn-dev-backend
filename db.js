import pg from 'pg'



const pool = new pg.Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT ? process.env.PORT : 5432,
  });






export default pool;