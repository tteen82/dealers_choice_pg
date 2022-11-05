const { client, syncAndSeed } = require("./db");
const express = require("express");
const path = require("path");
const innerFnc = require("./assets/innerFnc");
const views = require("./assets/views");

const app = express();
const port = process.env.PORT || 3000;

app.use(require("morgan")("dev"));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.send(views.main(innerFnc, req));
});

app.get("/movies", async (req, res) => {
  // res.send(views.movies(innerFnc, req, next));
  const response = await client.query("SELECT * FROM movies;");
  const movieslist = response.rows;
  res.send(`
    <html>
  <head>
  <title>
      Movies
      </title>
    <link rel='stylesheet' href='/assets/styles.css' />
  </head>
  <body>
  ${innerFnc.nav(req.url)}
    <section>
      <h1> Avengers </h1>
      <ol>
      ${movieslist
        .map((el) => {
          return `<li><a href='/movies/${el.id}'> ${el.title} ${el.year} </a>`;
        })
        .join("")}
      </section>
      ${innerFnc.script()}
  </body>
  </html>
  `);
});

app.get("/movies/:id", async (req, res, next) => {
  try {
    const promises = [
      client.query("SELECT * FROM movies WHERE id=$1;", [req.params.id]),
      client.query(
        "SELECT DISTINCT name FROM heros INNER JOIN casting ON heros.id = casting.heros_id WHERE casting.movies_id=$1;",
        [req.params.id]
      ),
    ];
    const [postResponse, castingResponse] = await Promise.all(promises);
    const post = postResponse.rows[0];
    const casting = castingResponse.rows;

    res.send(`
    <html>
    <head>
    <title>
    ${post.title}
    </title>
      <link rel='stylesheet' href='/assets/styles.css' />
    </head>
    <body>
    ${innerFnc.nav(req.url)}
      <section>
        <h1> <a href='/movies '>Avengers </a> </h1>
        <h2> ${post.title} ${post.year}</h2>
        <img src=${post.imagesrc}>
        <div>
          <h1>Plot</h1>
          <p>${post.synopsis}</p>
          <h1> Cast </h1>
          <ul>
          ${casting
            .map((el) => {
              return `<li> ${el.name}</li>`;
            })
            .join("")}
        </div>
        </section>
        ${innerFnc.script()}
    </body>
  </html>
`);
  } catch (ex) {
    next(ex);
  }
});

app.get("*", function (req, res) {
  res.status(404).send(views.pageNotFound());
});

const setUp = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    console.log("connected to database");
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

setUp();
