const pool = require('../db');

const getAllProv = async (req, res, next) => {
  try {
    const allProv = await pool.query(`SELECT * FROM dbo."tblProv"`)
    res.json(allProv.rows)
  } catch (error) {
    next(error)
  }
};

module.exports = {
    getAllProv
};