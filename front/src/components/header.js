import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "../components/login";
import Register from "../components/register";
import Users from "../components/users";
import Dashboard from "../components/dashboard";


export default class Header extends Component {
    constructor(props) {
      super(props)

      this.state ={
        loginButton: <Link to="/login" className="nav-link">Login</Link>,
        registerButton: <Link to="/register" className="nav-link mr-auto">Register</Link>,
        dashButton: '',
        authenticated: false
      }
    }

    changeBar() {
      if (this.state.authenticated) {
        this.setState({
          loginButton: <Link to="/logout" className="nav-link">Logout</Link>,
          registerButton: '',
          dashButton: <Link to="/dashboard" className="nav-link">Dashboard</Link>
        })
      }
    }

    componentDidMount() {
      console.log(this.state.authenticated)
      this.changeBar()
    }

    render() {
        return (
          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">MERN</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    {this.state.dashButton}
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="navbar-item">
                    {this.state.loginButton}
                  </li>
                  <li className="navbar-item">
                    {this.state.registerButton}
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
        )
    }
}
