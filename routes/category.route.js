/* eslint-disable no-console */
const router = require('express').Router();

const categoryPage = require('../components/CategoryPage');
const { Category, Question } = require('../db/models');
const QAList = require('../components/QAList');
const QAPage = require('../components/QAPage');

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

router.get('/:id/questions/:qustionId', async (req, res) => {
  try {
    const { id, qustionId } = req.params;
    const question = await Question.findOne({
      where: { categotyID: id },
      where: { id: qustionId },
    });
    const html = res.renderComponent(QAPage, {
      title: 'QA',
      question,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    console.log(message);
    res.end();
  }
});
module.exports = router;
