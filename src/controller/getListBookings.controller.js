const pool = require('../db');

const getListBookings = async (req, res, next) => {

try {
  
  const result = await pool.query(`SELECT res.date_res
                                    ,res.time_res
                                    ,prov.name_prov
                                    ,prov.tel_prov
                                    ,prov.mail_prov
                                    ,prov.adress_prov
                                    FROM dbo."tblRes" as res
                                    INNER JOIN dbo."tblProv" as prov 
                                    ON prov.prov_id = res.prov_id`)
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "No reservations yet",
    })
  }
  res.json(result.rows);
} catch (error) {
  next(error)
  console.log(error.message)
  return res.status(500).json({
    error: error.message,
  })
}
};

module.exports = {
    getListBookings
};