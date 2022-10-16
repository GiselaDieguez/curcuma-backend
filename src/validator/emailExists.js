const { check } = require('express-validator');
const pool = require('../db');

  const emailExists = check('mail_us').custom(async(value) => {
    const { rows } = await pool.query(`SELECT * 
                                        FROM dbo."tblUsers"
                                        WHERE mail_us = $1`, [value])
    if (rows.length) {
      throw new Error ('El email ya se encuentra registrado.')
    }
  })
  
  module.exports={
    emailExists
  }