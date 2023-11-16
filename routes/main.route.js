/* eslint-disable no-console */
const router = require('express').Router();
// const MainPage = require()
router.get('/', (req, res) => {
  try {
    const html = res.renderComponent(MainPage);
    res.send(html);
  } catch (error) {
    res.json(error);
  }
});
