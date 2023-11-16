/* eslint-disable no-console */
require('@babel/register');
const morgan = require('morgan');
const express = require('express');

const app = express(); // Веб-сервер
const PORT = process.env.PORT ?? 3000;
const path = require('path');

const indexRouter = require('./routes/index.route');
const ssr = require('./middleware/ssr');

app.use(ssr);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, async () => {
  console.log('Запускаемся дядя!', PORT);
});
