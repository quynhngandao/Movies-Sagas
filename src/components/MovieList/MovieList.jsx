import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MovieItem from "./MovieItem";
import "./MovieList.css";
 
function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="container">
              <MovieItem movie={movie}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;

