const React = require('react');
const Layout = require('./Layout');
const CardCategory = require('./CardCategory');

module.exports = function CategoryPage({ title, user, cards }) {
  return (
    <Layout title={title} user={user}>
      <section class="hero is-link is-large">
        <div class="hero-body">
          <div class="container has-text-centered">
            {user && (
              <>
                <p class="title">Welcome on Quiz, {user.name}!</p>
              </>
            )}
            <p class="title">
              {cards.map((card) => (
                <CardCategory key={card.id} card={card} />
              ))}
            </p>
            <p class="subtitle">Your score: {user.score}</p>
          </div>
        </div>
        <div className="pepe">
          <img src="/img/pepefrg-4.gif" alt="" />
        </div>
        <div className="pepe2">
          <img src="/img/pepefrg-4.gif" alt="" />
        </div>
      </section>
    </Layout>
  );
};
