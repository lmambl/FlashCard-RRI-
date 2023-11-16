const router = require('express').Router();

const mainRouter = require('./main.route');
const regaRouter = require('./rega.route');
const categoryRouter = require('./category.route');

router.use('/', mainRouter);
router.use('/rega', regaRouter);
router.use('/category', categoryRouter);

module.exports = router;
