const { Router } = require('express');
const { getListBookings } = require('../controller/getListBookings.controller');



const router = Router();

router.get('/list/bookings', getListBookings)


module.exports = router;