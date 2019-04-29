import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Evan's MERN Stack WebApp</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
                <li className="navbar-item">
                  <Link to="/register" className="nav-link mr-auto">Register</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/users" className="nav-link mr-auto">List Users</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    </div>
  );
}

export default App;
