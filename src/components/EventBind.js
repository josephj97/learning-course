import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        // Third method (official and mostly used) by binding from the constructor
        this.clickHandler = this.clickHandler.bind(this)
    }

    // Third method (official and mostly used) by binding from the constructor
    clickHandler() {
        this.setState({
            message: "GoodBye!!"
        })
    }

    // Fourth method: define the trigged function as an arrow function
    // clickHandler = () => {
    //     this.setState({
    //         message: "GoodBye!!"
    //     })
    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* First method by using bind() */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                
                {/* Second method by using the arrow function */}
                {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
                
                {/* Third method (official and mostly used) by binding from the constructor */}
                <button onClick={this.clickHandler}>Click</button>

                {/* Fourth method: define the trigged function as an arrow function */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default EventBind