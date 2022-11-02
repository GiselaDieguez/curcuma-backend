const { Router } = require('express');
const { check } = require('express-validator');
const { newBooking } = require('../controller/createBookings.controller');

const router = Router();


router.post('/booking', 
[
check('date_res', 'La fecha es obligatoria').isDate(),
check('time_res', 'La hora es obligatoria'),
check('state_res'),
check('prov_id'),
check('user_id')
], 
newBooking)

module.exports = router;