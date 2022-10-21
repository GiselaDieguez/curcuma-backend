const pool = require('../db');

const newBooking = async (req, res, next) => {


try {
  const { date_res, time_res, state_res, prov_id, user_id} = req.body
  
  const result = await pool.query(`INSERT INTO dbo."tblRes" (date_res, time_res, state_res, prov_id, user_id)
  VALUES ($1, $2, $3, $4, $5)`,
          [
            date_res, 
            time_res,
            state_res,
            prov_id,
            user_id
          ])
    res.status(201).json({
    success: true,
    message: "Se creó una reserva"
  });
} catch (error) {
  next(error)
  console.log(error.message)
  return res.status(500).json({
    error: error.message,
  })
}

};

module.exports = {
    newBooking
};