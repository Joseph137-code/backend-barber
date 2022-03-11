const express = require('express')
const router = express.Router();
const {validateJwt} = require('../middleware/tokenValidation')

const {newDate } = require('../controllers/dateControllers')


/* ruta es /api/date */

router.post('/newDate', validateJwt, newDate)


module.exports = router;