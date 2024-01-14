import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {

        // If/Else conditional rendering
        // if (this.state.isLoggedIn) {
        //     return <div>Hello Jozz</div>
        // } else {
        //     return <div>Hello Guest!</div>
        // }

        // Element Variables conditional rendering
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello Jozz</div>
        // } else {
        //     message = <div>Hello Guest!</div>
        // }
        // return <div>{message}</div>

        // Ternary Conditional Operator(? :) conditional rendering
        // return this.state.isLoggedIn? <div>Hello Jozz</div> : <div>Hello Guest!</div>

        // Short Circuit Operator(&&) conditional rendering
        return this.state.isLoggedIn && <div>Hello Jozz</div>
    }
}

export default UserGreeting