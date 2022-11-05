const pg = require("pg");

const client = new pg.Client("postgres://localhost/avengers");

const syncAndSeed = async () => {
  const SQL = `
  DROP TABLE IF EXISTS casting;
  DROP TABLE IF EXISTS movies;
  DROP TABLE IF EXISTS heros;

  CREATE TABLE movies(
    id INTEGER PRIMARY KEY,
    title VARCHAR(100),
    year VARCHAR(100),
    imagesrc VARCHAR(1000),
    synopsis VARCHAR(1000)
    );

  CREATE TABLE heros(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
    );
    
  CREATE TABLE casting(
    heros_id INTEGER REFERENCES heros(id),
    movies_id INTEGER REFERENCES movies(id)
    );

    INSERT INTO movies(id, title, year, imagesrc, synopsis) VALUES(1, 'The Avengers', '2012', 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 'When Thors evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Furys dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).');
    INSERT INTO movies(id, title, year, imagesrc, synopsis) VALUES(2, 'Avengers: Age of Ultron', '2015', 'https://www.ocmoviereviews.com/wp-content/uploads/2015/05/avengers-age-of-ultron.jpg','When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.');
    INSERT INTO movies(id, title, year, imagesrc, synopsis) VALUES(3, 'Avengers: Infinity War', '2018', 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg','Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.');
    INSERT INTO movies(id, title, year, imagesrc, synopsis) VALUES(4, 'Avengers: End Game', '2019', 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810','drift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.');

    INSERT INTO heros(id, name) VALUES(1, 'Robert Downey Jr.');
    INSERT INTO heros(id, name) VALUES(2, 'Chris Evans');
    INSERT INTO heros(id, name) VALUES(3, 'Mark Ruffalo');
    INSERT INTO heros(id, name) VALUES(4, 'Chris Hemsworth');
    INSERT INTO heros(id, name) VALUES(5, 'Scarlett Johansson');
    INSERT INTO heros(id, name) VALUES(6, 'Jeremy Renner');
    INSERT INTO heros(id, name) VALUES(7, 'Tom Hiddleston');
    INSERT INTO heros(id, name) VALUES(8, 'Clark Gregg');
    INSERT INTO heros(id, name) VALUES(9, 'Stellan Skarsgård');
    INSERT INTO heros(id, name) VALUES(10, 'Samuel L. Jackson');
    INSERT INTO heros(id, name) VALUES(11, 'Don Cheadle');
    INSERT INTO heros(id, name) VALUES(12, 'Aaron Taylor-Johnson');
    INSERT INTO heros(id, name) VALUES(13, 'Elizabeth Olsen');
    INSERT INTO heros(id, name) VALUES(14, 'Paul Bettany');
    INSERT INTO heros(id, name) VALUES(15, 'Cobie Smulders');
    INSERT INTO heros(id, name) VALUES(16, 'Anthony Mackie');
    INSERT INTO heros(id, name) VALUES(17, 'Hayley Atwell');
    INSERT INTO heros(id, name) VALUES(18, 'Idris Elba');
    INSERT INTO heros(id, name) VALUES(19, 'James Spader');
    INSERT INTO heros(id, name) VALUES(20, 'Benedict Cumberbatch');
    INSERT INTO heros(id, name) VALUES(21, 'Tom Holland');
    INSERT INTO heros(id, name) VALUES(22, 'Chadwick Boseman');
    INSERT INTO heros(id, name) VALUES(23, 'Sebastian Stan');
    INSERT INTO heros(id, name) VALUES(24, 'Peter Dinklage');
    INSERT INTO heros(id, name) VALUES(25, 'Benedict Wong');
    INSERT INTO heros(id, name) VALUES(26, 'Pom Klementieff');
    INSERT INTO heros(id, name) VALUES(27, 'Karen Gillan');
    INSERT INTO heros(id, name) VALUES(28, 'Dave Bautista');
    INSERT INTO heros(id, name) VALUES(29, 'Zoe Saldaña');
    INSERT INTO heros(id, name) VALUES(30, 'Vin Diesel');
    INSERT INTO heros(id, name) VALUES(31, 'Bradley Cooper');
    INSERT INTO heros(id, name) VALUES(32, 'Gwyneth Paltrow');
    INSERT INTO heros(id, name) VALUES(33, 'Benicio del Toro');
    INSERT INTO heros(id, name) VALUES(34, 'Josh Brolin');
    INSERT INTO heros(id, name) VALUES(35, 'Chris Pratt');
    INSERT INTO heros(id, name) VALUES(36, 'Paul Rudd');
    INSERT INTO heros(id, name) VALUES(37, 'Brie Larson');
    INSERT INTO heros(id, name) VALUES(38, 'Danai Gurira');
    INSERT INTO heros(id, name) VALUES(39, 'Jon Favreau');
    

    INSERT INTO casting(heros_id, movies_id) VALUES(1, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(2, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(3, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(4, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(5, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(6, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(7, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(8, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(9, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(10, 1);
    INSERT INTO casting(heros_id, movies_id) VALUES(1, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(2, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(3, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(4, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(5, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(6, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(11, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(12, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(13, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(14, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(15, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(16, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(17, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(18, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(19, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(10, 2);
    INSERT INTO casting(heros_id, movies_id) VALUES(1, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(2, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(3, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(4, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(5, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(20, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(11, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(21, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(22, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(14, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(13, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(16, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(23, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(7, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(18, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(24, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(25, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(26, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(27, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(28, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(29, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(30, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(31, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(32, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(33, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(34, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(35, 3);
    INSERT INTO casting(heros_id, movies_id) VALUES(1, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(2, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(3, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(4, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(5, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(6, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(11, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(36, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(37, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(27, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(38, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(25, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(39, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(31, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(32, 4);
    INSERT INTO casting(heros_id, movies_id) VALUES(34, 4);



    `;
  await client.query(SQL);
};

module.exports = { client, syncAndSeed };
