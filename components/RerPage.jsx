const React = require("react");
const Layout = require("./Layout");

module.exports = function Registration({ user }) {
  return (
    <Layout user={user}>
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        Регистрация
      </p>
      <form className="mx-1 mx-md-4">
        <input type="text" className="form-control" name="name" />
        <label className="form-label">Login</label>
        <button type="submit" className="btn btn-primary btn-lg">
          Register
        </button>
      </form>
    </Layout>
  );
};
