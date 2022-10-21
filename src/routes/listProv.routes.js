const { Router } = require('express');
const { getAllProv } = require('../controller/getListProv.controller');


const router = Router();

router.get('/listProv', getAllProv)


module.exports = router;