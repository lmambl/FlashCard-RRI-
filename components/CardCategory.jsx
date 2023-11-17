const React = require('react');

module.exports = function CardCategory({ card }) {
  return (
    <div>
      <a href={`/category/${card.id}/questions/1`}>{card.title}</a>
    </div>
  );
};
