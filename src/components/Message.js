import React, { Component } from "react";

// Class Components
class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hello Hamada!'
        }
    }

    changeMessage(){
        this.setState({
            message: 'You are subscribed ya Hamadaaaa'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;