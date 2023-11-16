const React = require("react");
const Layout = require("./Layout");
const RerPage = require("./RerPage");

module.exports = function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="js-main-page">
        <header className="jumbotron text-center text_header">
          <h1 className="name-text">Welcome on Our Quiz!</h1>
        </header>
        <h2>Let's Play!</h2>
        <RerPage />
      </div>
    </Layout>
  );
};
