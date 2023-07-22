import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";
import AppBarButton from "../AppBarButton/AppBarButton";

function App() {
  return (
    <div className="App">
      <Router>
      
        {/* Nav bar */}
       <AppBarButton/>

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

