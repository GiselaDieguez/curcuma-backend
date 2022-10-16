const { Router } = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controller/register.controller');
const { emailExists } = require('../validator/emailExists');

const router = Router();

router.post(
  '/register',
  [
    check('mail_us', 'El email es obligatorio').isEmail(),
    check('pass_us', 'El password debe tener como mínimo 6 caracteres').isLength({ min: 6 }).withMessage('El password debe tener como mínimo 6 caracteres'),
  ] 
  , 
  emailExists,
  createUser
  )

module.exports = router;