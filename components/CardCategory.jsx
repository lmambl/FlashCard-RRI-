const React = require('react');

module.exports = function CardCategory({ card }) {
  return (
    <div>
      <a href={`/test${card.id}`}>{card.title}</a>
    </div>
  );
};

