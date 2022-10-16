const pool = require('../db');

const newBooking = async (req, res, next) => {


try {
  const { } = req.body
  
  const result = await pool.query(`MIRAA HANIII, ACA VA LA QUERY`
                                      ,[])

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