const Movie = require("./sequelize-rest");
const express = require("express");
const app = express();
const port = 3000;

app.post("/movies", (req, res, next) => {
  Movie.create(req.body)
    .then(movie => res.json(movie))
    .catch(next);
});

app.get("/movies", (req, res, next) => {
  Movie.findAll()
    .then(movies => {
      res.json(movies);
    })
    .catch(next);
});

app.get("/movies/id", (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => {
      if (!movie) {
        res.status(404).end();
      } else {
        res.json(movie);
      }
    })
    .catch(next);
});

app.put("movies/id", (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => {
      if (movie) {
        return movie.update(req.body).then(movie => res.json(movie));
      }
      return res.status(404).end();
    })
    .catch(next);
});

app.delete("/movies/id", (req, res, next) => {
  Movie.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(moviedel => {
      if (moviedel) {
        return res.status(204).end();
      }
      return res.status(404).end();
    })
    .catch(next);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
