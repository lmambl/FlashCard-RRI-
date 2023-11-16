const router = require('express').Router();
const RegPage = require('../components/RerPage');
const { User } = require('../db/models');



router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const user = await User.create({ name, score: 1000 });
      res.app.locals.user = user;
      res.redirect('/category');
    } else {
      res.status(400).send('введите имя');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
