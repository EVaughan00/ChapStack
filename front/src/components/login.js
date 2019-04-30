import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);

        const userCreds = {
          email: this.state.email,
          password: this.state.password
        }

        axios.post('http://localhost:4000/login', userCreds)
            .then(res => {
              if (res.data.authenticated === true) {
              console.log('Authenticated')
            } else {
              console.log('Did not authenticate')
            }});

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
