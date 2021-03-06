import "./header.css";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/home/home";
import Gallery from "./components/gallery/gallery.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <NavLink to="/" exact={true}>
            Home
          </NavLink>{" "}
          | <NavLink to="/gallery">Gallery</NavLink>
        </header>
        <Switch>
          <Route path="/gallery" component={Gallery} />
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
