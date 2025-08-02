import pg from 'pg'
import { Pool } from 'pg'


const pool = new Pool({
connectionString: 'postgresql://visitor_count_2u0z_user:rvmtNIj4QcCENElBrzGaVTWDD21miZ2c@dpg-d26v1tfdiees73b5c4vg-a.oregon-postgres.render.com/visitor_count_2u0z',
    ssl: {
        rejectUnauthorized: false,
      }
  });

// const localpool = new Pool({
//     host: process.env.SERVER_NAME,
//     databaseName: process.env.DATABASE_LOCAL,
//     port: process.env.PORT_LOCAL,
//     user: process.env.USER_LOCAL,
//     password: process.env.PASSWORD_LOCAL,
    
// })
// Test the connection
pool.connect()
  .then(client => {
    return client
      .query('SELECT NOW()')
      .then(res => {
        console.log('Connected! Time:', res.rows[0]);
        client.release();
      })
      .catch(err => {
        client.release();
        console.error('Query error:', err.stack);
      });
  })
  .catch(err => {
    console.error('Connection error:', err.stack);
  });


export default pool ;