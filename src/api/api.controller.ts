import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  user: process.env.user,
  password: process.env.password,
  server: `${process.env.server}`,
  database: process.env.database,
  options: {
    "encrypt": false,
    "enableArithAbort": true
  },pool: {
    max: 20,
    min: 10,
    idleTimeoutMillis: 3000
  }
}



export const login = (async (ctx) => {
  const pool = await sql.connect(config);
  let result1 = await pool.request()
  .query('select * from temp order by [index]');
        
  ctx.status = 200;
  ctx.body = {
  "rowsAffected" : result1.rowsAffected,
  "recordset" : result1.recordset};
});
