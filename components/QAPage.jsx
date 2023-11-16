const React = require('react');

function QAPage({ question }) {
  console.log(question);
  return (
    <div className="cardProduct" data-id={question.id}>
      <div className="imageProduct">{/* <img src={product.url}/> */}</div>
      <div>
        <p>{question.question}</p>
      </div>
      <div>
        <p>{question.answer}</p>
      </div>
      <div>{question.cotegotyID}</div>
    </div>
  );
}
module.exports = QAPage;

