import React, { Component } from "react";

// Class Components
class Welcome extends Component {
    render() {
        return <p>My name is {this.props.name} a.k.a. {this.props.nickname}</p>
    }
}

export default Welcome;