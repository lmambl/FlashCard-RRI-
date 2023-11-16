// const React = require('react');
// const router = require('express').Router();
// const { Question } = require('../db/models');
// const QAList = require('../components/QAList');

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const questions = await Question.findAll({
//       where: { categotyID: id },
//     });
//     const html = res.renderComponent(QAList, {
//       title: 'QA',
//       questions,
//     });
//     res.status(200).send(html);
//   } catch ({ message }) {
//     console.log(message);
//     res.end();
//   }
// });

