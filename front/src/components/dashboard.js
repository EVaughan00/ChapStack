import React, { Component } from 'react';

//var name = data.name
export default class Dashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: localStorage.getItem('userName'),
        email: localStorage.getItem('userEmail')
      }
    }

    // getData() {
    //   this.setState({
    //     name: localStorage.getItem('userName'),
    //     email: localStorage.getItem('userEmail')
    //   })
    //   console.log(this.state.name + ' ' + this.state.email)
    // }
    //
    // async componentDidMount() {
    //   await this.getData()
    // }

    render() {
        return (
            <div>
                <p>Welcome to the Dashboard {this.state.name}</p>
                <h4>Your email is: {this.state.email}</h4>
            </div>
        )
    }
}
