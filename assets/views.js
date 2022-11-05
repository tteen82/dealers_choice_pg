const main = (innerFnc, req) => {
  return `
  <html>
  <head>
  <title>
    Main Page
    </title>
    <link rel='stylesheet' href='/assets/styles.css' />
  </head>
  <body>
    ${innerFnc.nav(req.url)}
    <section>
      <h1> Avengers </h1>
      <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Avengers-Endgame-Secret-Wars-SR.jpg">
      </section>
      ${innerFnc.script()}
  </body>
</html>
`;
};

const pageNotFound = () => {
  return `
  <html>
  <head>
    <link rel='stylesheet' href='/assets/styles.css' />
  </head>
  <body id="error">
  <h1> Page Not Found </h1>
  <a href='/'> Try Agin </a>
  <img src="https://external-preview.redd.it/BdgOFt4JsxSkCCBuleFw19_cdzndROlDJhvS9Q6jWx0.png?format=pjpg&auto=webp&s=0cfb8b44935c586d2993309018798171a07ef95a">
  </body>
  </html>
  `;
};
module.exports = { main, pageNotFound };
