/* eslint-disable no-console */
const express = require('express');

const app = express(); // Веб-сервер
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('ОПА А ВОТ И СТРАНИЧКА!');
});

app.listen(PORT, () => {
  console.log('Запускаемся дядя!', PORT);
});
