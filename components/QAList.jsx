const React = require('react');
const Layout = require('./Layout');
const QAPage = require('./QAPage');

function QAList({ questions, title }) {
  return (
    <Layout title={title}>
      <div className="cont" id="idQAList">
        {console.log(questions)}{' '}
        {questions.map((question) => (
          <QAPage key={question.id} question={question} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = QAList;

