import React, { Component } from 'react'

class ClassEvent extends Component {
    constructor(){
        super()
        this.state = {
            paragraph: "text 1"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler = () => {
        this.setState({
            paragraph: "mamad"
        })
    }

    // clickHandler() {
    //     this.setState({
    //         paragraph: "text 2"
    //     })
    //     console.log(this)
    // }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Event</button>
                <p> {this.state.paragraph} </p>
            </div>
        )
    }
}

export default ClassEvent