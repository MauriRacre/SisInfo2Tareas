const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgresSuper',
  host: '163.123.183.83',
  database: 'SIS_II_MEET',
  password: '12345678',
  port: 19523,
})


module.exports = pool;
