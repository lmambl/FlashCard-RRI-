const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ user }) {
  return (
    <Layout user={user}>
      <form action="/rega" method="POST">
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="text"
              placeholder="Text input"
              name="name"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">Эльбрус не секта!</p>
          <button class="button">Register</button>
        </div>
      </form>
    </Layout>
  );
};
