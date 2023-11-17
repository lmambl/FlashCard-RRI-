const React = require('react');
const Layout = require('./Layout');
const RerPage = require('./RerPage');

module.exports = function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <section class="hero is-success is-fullheight">
        <div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
          </header>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">Welcome on Our Quiz!</p>
            <p class="subtitle">Введи свое имя Дружок-Пирожок:</p>
            <p>
              <RerPage />
            </p>
          </div>
        </div>
        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active">
                  <a>Думаешь</a>
                </li>
                <li>
                  <a>Что тут</a>
                </li>
                <li>
                  <a>Крутые кнопки</a>
                </li>
                <li>
                  <a>Но они</a>
                </li>
                <li>
                  <a>Не очень то </a>
                </li>
                <li>
                  <a>Работают</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </Layout>
  );
};
