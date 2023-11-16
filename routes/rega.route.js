const router = require('express').Router();
const RegPage = require('../components/RerPage');
const { User } = require('../db/models');


router.get('/', (req, res) => {
  try {
    const html = res.renderComponent(RegPage);
    res.send(html);
  } catch (error) {
    res.json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name: name, score: 1000 });
    res.app.locals.user = user;
    res.redirect('/category');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
