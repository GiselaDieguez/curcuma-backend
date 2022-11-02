const { Router } = require('express');
const { getProv } = require('../controller/getProv.controller');


const router = Router();


router.get('/prov/:id', getProv)

module.exports = router;