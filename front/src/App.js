import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Users from "./components/users";
import Dashboard from "./components/dashboard";

var loggedOut;
var loginButton;
var registerButton;
if (loggedOut) {
  loginButton = <Link to="/login" className="nav-link">Logout</Link>;
  registerButton = null;
} else {
  loginButton = <Link to="/login" className="nav-link">Logout</Link>;
  registerButton = <Link to="/register" className="nav-link mr-auto">Register</Link>
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/dashboard" className="nav-link mr-auto">Dashboard</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                {loginButton}
              </li>
              <li className="navbar-item">
                {registerButton}
              </li>
            </ul>
            </div>
          </nav>
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    </div>
  );
}

export default App;
