const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get("/:id", (req, res) => {
 
  const movieId = req.params.id;
  console.log("movieId is:", movieId);
 
  const queryText = `SELECT "movie_id", "title", "poster", "description", string_agg("genres"."name", ', ' ) AS "genres" FROM "movies"
  JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movie_id" = $1
  GROUP BY "movie_id", "title", "poster" ,"description";`;
 
    pool.query(queryText, [movieId])
    .then((result) => {
      console.log('result.rows in api/genre', result.rows)
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log("Error in GET /genre.router", err);
    });
});


module.exports = router;
