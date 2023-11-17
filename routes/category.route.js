/* eslint-disable no-console */
const router = require('express').Router();
const { EOL } = require('os');
const categoryPage = require('../components/CategoryPage');
const { Category, Question, User } = require('../db/models');
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

router.get('/:id/questions/:index', async (req, res) => {
  try {
    const { id, index } = req.params;
    const questions = await Question.findAll({
      where: { categotyID: id },
    });
    if (Number(index) < questions.length) {
      const html = res.renderComponent(QAPage, {
        title: 'QA',
        question: questions[index],
        index: Number(index) + 1,
      });
      res.status(200).send(html);
    } else {
      res.redirect('/category');
    }
  } catch ({ message }) {
    console.log(message);
    res.end();
  }
});

router.post('/questions', async (req, res) => {
  const { id, answer } = req.body;
  if (res.app.locals.user) {
    const user = await User.findOne({ where: { id: res.app.locals.user.id } });
    const a = await Question.findOne({
      where: { id },
    });
    if (answer.toUpperCase().trim() === a.answer) {
      user.score += 100;
      await user.save();
      res.app.locals.user.score = user.score;
      res.json({
        message: `${user.name}, ты молодчинка! Держи сотку на мороженку, теперь твой счет равен:${user.score}`,
      });
    } else {
      user.score -= 100;
      await user.save();
      res.app.locals.user.score = user.score;
      res.json({
        message: `${user.name}, ты дал неверный ответ!${EOL}Верный  ответ: ${a.answer} С тебя сотка, теперь твой счет равен:${user.score}`,
      });
    }
  }
});

module.exports = router;
