const React = require('react');
const Layout = require('./Layout');
const CardCategory = require('./CardCategory');

module.exports = function CategoryPage({ title, user, cards }) {
  return (
    <Layout title={title} user={user}>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Welcome on Quiz, {user.name}!</p>
          <p class="subtitle">Your score: {user.score}</p>
        </div>
      </section>
      <section class="hero is-medium is-link">
        <div class="hero-body ">
          <div class="container has-text-centered">
            {cards.map((card) => (
              <CardCategory key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
      <div className="js-main-page">
        <header className="jumbotron text-center text_header">
          <h1 className="name-text"></h1>
        </header>
        <h2></h2>
        <div></div>
      </div>
    </Layout>
  );
};
