const React = require('react');
const Layout = require('./Layout');

function QAPage({ question, index, title}) {
  console.log(question);
  return (
    <Layout title={title}>
      <div className="cardProduct" data-id={question.id}>
        <div className="imageProduct">{/* <img src={product.url}/> */}</div>
        <div>
          <p>{question.question}</p>
        </div>
        <div>
          <form id="answerForm" data-id={question.id}>
            <input name="answer" type="text" placeholder="ОТВЕТ ПИШИ ТУТ" />
            <button type="submit">ЖМИ СОСОК</button>
          </form>
          <div className="answerQ"></div>
        </div>
        <div>
          <a href={`/category/${question.categotyID}/questions/${index}`}>
            NEXT
          </a>
        </div>
      </div>
    </Layout>
  );
}
module.exports = QAPage;
