import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        {/* Nav bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* Display list Pages */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        {/* Route parameters */}
        <Route path="/details/:id" >
          <MovieDetail />
        </Route>
      </Router>
    </div>
  );
}

export default App;

