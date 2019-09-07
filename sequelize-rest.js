const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:secret@localhost:5432/postgres"
);

const Movie = sequelize.define("movie", {
  title: { type: Sequelize.TEXT },
  yearOfRelease: { type: Sequelize.INTEGER },
  synopsis: { type: Sequelize.TEXT }
});

sequelize
  .sync()
  .then(() =>
    Promise.all([
      Movie.create({
        title: "ABC1 ",
        yearOfRelease: 2017,
        synopsis: "abc"
      }),
      Movie.create({
        title: "ABC2",
        yearOfRelease: 2018,
        synopsis: "abc2"
      }),
      Movie.create({
        title: "ABC3 ",
        yearOfRelease: 2019,
        synopsis: "abc3"
      })
    ])
  )
  .catch(console.error);
module.exports = Movie;
