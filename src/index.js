import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchAllGenres);
  yield takeEvery("FETCH_MOVIE_DETAILS", fetchMovieDetails);
}

function* fetchAllMovies() {
  try {
    // Fetch movies from DB
    const movies = yield axios.get("/api/movie");
    console.log("get all movies:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch (error) {
    console.log("Error in GET /index for movies", error);
  }
}

function* fetchAllGenres() {
  // get all genres from the DB
  try {
    const genres = yield axios.get("/api/genre");
    console.log("get all genres:", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
  } catch (error) {
    console.log("Error in GET /index genres", error);
  }
}

function* fetchMovieDetails(action) {
  console.log(action.payload, "action.payload in index")
  try {
    const detail = yield axios.get(`/api/genre/${action.payload}`);
    console.log("get details.data:", detail.data[0]);
    yield put({
      type: "SET_MOVIE_DETAILS",
      payload: detail.data[0],
    });
  } catch (error) {
    console.log("Error in GET /index details", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store movie details returned from the server
const detail = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    detail,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

