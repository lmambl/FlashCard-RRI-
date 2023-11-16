/* eslint-disable no-console */
const router = require('express').Router();

const categoryPage = require('../components/CategoryPage');
const { Category } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const cards = await Category.findAll();
    const html = res.renderComponent(categoryPage, {
      title: 'AllCategory',
      cards,
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
    res.json(message);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const cards = await Category.findAll();
//     console.log(cards);
//     const html = res.renderComponent(categoryPage, { cards });
//     res.send(html);
//   } catch ({ message }) {
//     console.log(message);
//     res.json(message);
//   }
// });
module.exports = router;

