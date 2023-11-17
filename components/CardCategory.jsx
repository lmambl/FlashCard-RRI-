const React = require('react');

module.exports = function CardCategory({ card }) {
  return (
    <div class="box">
      <a href={`/category/${card.id}/questions/0`}>{card.title}</a>
    </div>
  );
};
