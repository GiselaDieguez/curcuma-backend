const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser } = require('../controller/login.controller');
const { loginFieldsCheck } = require('../validator/loginFieldCheck');

const router = Router();


router.post(
    '/login', 
[
    check('mail_us', 'El email es obligatorio').isEmail(),
    check('pass_us', 'El password debe tener como mínimo 6 caracteres').isLength({ min: 6 }),
],
loginFieldsCheck,
loginUser
)

module.exports = router;