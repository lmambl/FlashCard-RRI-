const React = require('react');
const Layout = require('./Layout');
const CardCategory = require('./CardCategory');

module.exports = function CategoryPage({ title, user, cards }) {
  return (
    <Layout title={title} user={user}>
      <div className="js-main-page">
        <header className="jumbotron text-center text_header">
          <h1 className="name-text">Welcome on Quiz,{user.name}!</h1>
        </header>
        <h2>Your score: {user.score}</h2>
        <div>
          {cards.map((card) => (
            <CardCategory key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

