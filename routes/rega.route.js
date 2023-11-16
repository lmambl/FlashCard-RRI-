const router = require('express').Router();
const RegPage = require('../components/RegPage');

router.get('/', (req, res) => {
  try {
    const html = res.renderComponent(RegPage);
    res.send(html);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;

