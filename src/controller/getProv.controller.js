const pool = require('../db');

const getProv = async (req, res, next) => {

try {
  const { id } = req.params

  const result = await pool.query(`SELECT name_prov 
                                    FROM dbo."tblProv"
                                    WHERE prov_id = $1`,[id])
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "Provider not found",
    })
  }
  res.json(result.rows[0]);
} catch (error) {
  next(error)
  console.log(error.message)
  return res.status(500).json({
    error: error.message,
  })
}
};

module.exports = {
  getProv
};