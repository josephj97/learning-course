import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }


    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, comments, topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={username} onChange={this.handleUsernameChange}></input>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea type='text' value={comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value=''></option>
                            <option value='react'>React</option>
                            <option value='vue'>Vue</option>
                            <option value='angular'>Angular</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>

        )
    }
}

export default Form