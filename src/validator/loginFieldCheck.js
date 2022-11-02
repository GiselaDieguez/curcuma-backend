const { check } = require('express-validator');
const pool = require('../db');
const { compare } = require('bcryptjs')


  const loginFieldsCheck = check('mail_us').custom(async (value, { req }) => {
    const user = await pool.query(`SELECT *
                                    FROM dbo."tblUsers"
                                    WHERE mail_us = $1`, [value])
    if (!user.rows.length) {
      throw new Error("The email doesn't exist")
    }
    
    const validPassword = await compare(req.body.pass_us, user.rows[0].pass_us)
    
    if (!validPassword) {
      throw new Error ('Wrong password')
    }

    req.user = user.rows[0]
    
    if (validPassword){
      //login
    }else{
      //not login
      res.json({loggedIn: false, status: "Wrong email or password"})
    }


  })
  
  module.exports={
    loginFieldsCheck
  }