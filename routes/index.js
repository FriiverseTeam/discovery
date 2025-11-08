const { Router } = require('express');
const logger = require('../logger');

const router = Router();

const v1 = require('./v1');

logger.info('Discovery Routes loaded!');

router.use('/v1', v1);

module.exports = router;