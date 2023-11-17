const React = require('react');
const Layout = require('./Layout');

function QAPage({ question, index, title }) {
  console.log(question);
  return (
    <Layout title={title}>
      <div
        class="container is-max-widescreen"
        style={{ display: 'flex', marginTop: '10%' }}
      >
        <div
          class="container has-text-centered  is-max-desktop is-max-widescreen "
          style={{ display: 'flex', justifyContent: ' space-evenly' }}
        >
          <div class="card " style={{ maxWidth: '50%' }}>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={question.url} alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content  ">
              <div class="content  ">
                <div className="cardProduct" data-id={question.id}>
                  <div>
                    <p>{question.question}</p>
                  </div>
                  <div>
                    <form id="answerForm" data-id={question.id}>
                      <input
                        class="input is-primary"
                        name="answer"
                        type="text"
                        placeholder="Введи ответ"
                      />
                      <button
                        type="submit"
                        className="button is-primary is-light"
                      >
                        Жмай!
                      </button>
                    </form>
                    <div className="answerQ"></div>
                  </div>
                  <div>
                    <button class="button is-link is-light">
                      <a
                        href={`/category/${question.categotyID}/questions/${index}`}
                      >
                        NEXT
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        // <div className="cardProduct" data-id={question.id}>
        //   <div className="imageProduct">{/* <img src={product.url}/> */}</div>
        //   <div>
        //     <p>{question.question}</p>
        //   </div>
        //   <div>
        //     <form id="answerForm" data-id={question.id}>
        //       <input name="answer" type="text" placeholder="ОТВЕТ ПИШИ ТУТ" />
        //       <button type="submit">ЖМИ СОСОК</button>
        //     </form>
        //     <div className="answerQ"></div>
        //   </div>
        //   <div>
        //     <a href={`/category/${question.categotyID}/questions/${index}`}>
        //       NEXT
        //     </a>
        //   </div>
        // </div>
      }
    </Layout>
  );
}
module.exports = QAPage;
