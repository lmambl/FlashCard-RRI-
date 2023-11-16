require("@babel/register");
/* eslint-disable no-console */
const express = require("express");

const app = express(); // Веб-сервер

const Mainro = require("./routes/main.route");
const ssr = require("./middleware/ssr");


app.use(ssr);
app.use("/", Mainro);

const PORT = process.env.PORT ?? 5000;

app.get("/", (req, res) => {
  res.send("ОПА А ВОТ И СТРАНИЧКА!");
});

app.listen(PORT, () => {
  console.log("Запускаемся дядя!", PORT);
});
