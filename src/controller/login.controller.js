const pool = require('../db');
const { sign } = require('jsonwebtoken')
const { validationResult } = require('express-validator')



const loginUser = async(req, res, next) => {
  const SECRET = pool.options.secret;
  let user = req.user

  const errors = validationResult( req );
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  let payload = {
    id: user.user_id,
    email: user.mail_us,
  }

  try {
    const token = await sign(payload, SECRET)

    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Se ha logueado correctamente.',
      payload: payload
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
};

module.exports = {
  loginUser
}