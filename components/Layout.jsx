const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css"
        />
        <script defer src="/script.js" />
        <link rel="stylesheet" href="/style/index.css" />
        <title>{title}</title>
      </head>

      <body>{children}</body>
    </html>
  );
};
