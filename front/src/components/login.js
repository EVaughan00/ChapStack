import React, { Component } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
// import Header from "../components/header";

const errStyle = {
  color: 'red'
};

const inputField = {
  width: '20%',
  marginLeft: '40%'
};


export default class Login extends Component {
  constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.signUp = this.signUp.bind(this);

        this.state = {
            email: '',
            password: '',
            authenticated: false,
            redirect: false
        }
    }

    signUp(res, type) {
      let postData;
      if (type === 'google') {
        console.log('is google')
        postData = { name: res.profileObj.name, provider: type, email: res.profileObj.email }
      }

      axios.post('http://localhost:4000/signup', postData)
          .then(resp => {
            console.log(resp.data.name + ' ' + resp.data.email)
            if (resp.data.auth!==false) {
              localStorage.setItem('userName', resp.data.name)
              localStorage.setItem('userEmail', resp.data.email)
              console.log('Authenticated')
              this.setState({authenticated: true})
              this.setState({redirect: true})
              this.props.history.push('/dashboard')
            } else {
              this.setState({error: <label style={errStyle}>Could Not Authenticate</label>})
          }
        });
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
              //console.log('Authenticated')
              this.setState({authenticated: true})
              localStorage.setItem('auth', true)
              this.props.history.push('/dashboard')
            } else {
              this.setState({error: <label style={errStyle}>Incorrect email and/or password</label>})
            }});

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {

        const responseGoogleFail = (response) => {
          console.log('Auth Failed')
        }

        const responseGoogle = (response) => {
          if (response) {
            this.signUp(response, 'google');
          }
        }

        return (
            <div className="mr-auto" style={{marginTop: 10}}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                                style={inputField}
                                type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                                style={inputField}
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                      {this.state.error}
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                    <GoogleLogin
                      style={{width: 500}}
                      clientId="1061835778517-k0ssf80tc5v93f6bouu46on6jbbdvgjo.apps.googleusercontent.com"
                      buttonText="Sign in with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogleFail}
                      cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
        )
    }
}
