const router = require('express').Router();

const mainRouter = require('./main.route');
const regaRouter = require('./rega.route');

router.use('/', mainRouter);
router.use('/', regaRouter);

module.exports = router;

