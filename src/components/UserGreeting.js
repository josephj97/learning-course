import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return <div>Hello Jozz</div>
        } else {
            return <div>Hello Guest!</div>
        }
    }
}

export default UserGreeting