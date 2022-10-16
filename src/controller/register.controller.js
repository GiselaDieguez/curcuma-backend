const pool = require('../db');
const { validationResult } = require('express-validator')
const { hash } = require('bcryptjs')

const createUser = async(req, res, next) => {
  const {date_us, name_us, lastnm_us, mail_us, pass_us, tel_us} = req.body

  const errors = validationResult( req );

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  try {
    const hanshedPassword = await hash(pass_us, 10)

    const result = await pool.query(`INSERT INTO dbo."tblUsers" (date_us, name_us, lastnm_us, mail_us, pass_us, tel_us)
                VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [
                  date_us,
                  name_us,
                  lastnm_us,
                  mail_us,
                  hanshedPassword,
                  tel_us
                ]);
    res.status(201).json({
      success: true,
      message: "Se registró correctamente"
    });
    res.send('Usuario creado')
    
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUser
}