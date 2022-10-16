const { check } = require('express-validator');
const pool = require('../db');
const { compare } = require('bcryptjs')


  const loginFieldsCheck = check('mail_us').custom(async (value, { req }) => {
    const user = await pool.query(`SELECT *
                                    FROM dbo."tblUsers"
                                    WHERE mail_us = $1`, [value])
    if (!user.rows.length) {
      throw new Error('El email no existe.')
    }
    

    const validPassword = await compare(req.body.pass_us, user.rows[0].pass_us)
    
    if (!validPassword) {
      throw new Error ('Password errónea.')
    }

    req.user = user.rows[0]
    
  })
  
  module.exports={
    loginFieldsCheck
  }