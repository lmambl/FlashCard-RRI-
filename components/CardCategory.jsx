const React = require('react');

module.exports = function CardCategory({ card }) {
  return (
    <div>
      <a href={`/category/${card.id}`}>{card.title}</a>
    </div>
  );
};
