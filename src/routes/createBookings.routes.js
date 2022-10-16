const { Router } = require('express');
const { newBooking } = require('../controller/createBookings.controller');

const router = Router();


router.get('/booking', newBooking)

module.exports = router;