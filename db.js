const { Client } = require("pg");

let db;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;
const DATABASE_PORT = process.env.DATABASE_PORT;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: `postgres://visitor_count_2u0z_user:rvmtNIj4QcCENElBrzGaVTWDD21miZ2c:postgresql://visitor_count_2u0z_user:rvmtNIj4QcCENElBrzGaVTWDD21miZ2c@dpg-d26v1tfdiees73b5c4vg-a.oregon-postgres.render.com/visitor_count_2u0z`,
  
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: `postgresql://${USER}:${PASSWORD}@127.0.0.1:${DATABASE_PORT}/playlist-app`
  });
}


db.connect();

module.exports = db;