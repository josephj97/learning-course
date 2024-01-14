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

        let message
        if (this.state.isLoggedIn) {
            message = <div>Hello Jozz</div>
        } else {
            message = <div>Hello Guest!</div>
        }

        return <div>{message}</div>
    }
}

export default UserGreeting