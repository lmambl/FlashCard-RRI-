/* eslint-disable no-console */
const router = require('express').Router();

const categoryPage = require('../components/CategoryPage');
const { Category, Question } = require('../db/models');
const QAList = require('../components/QAList');

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


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const questions = await Question.findAll({
      where: { categotyID: id },
    });
    const html = res.renderComponent(QAList, {
      title: 'QA',
      questions,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    console.log(message);
    res.end();
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
