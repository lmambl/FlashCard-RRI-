const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ user }) {
  return (
    <Layout user={user}>
      <p>Регистрация</p>
      <form action="/rega" method="POST">
        <input type="text" className="form-control" name="name" />
        <label className="form-label"></label>
        <button type="submit" className="btn btn-primary btn-lg">
          Register
        </button>
      </form>
    </Layout>
  );
};
