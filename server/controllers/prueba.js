var pool = require('../models/pool');

exports.getPrueba = (request, response) => {
  pool.query('SELECT * FROM registro ', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    console.log("prueba correcta");
  })
}
