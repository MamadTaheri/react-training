import React, { Component } from 'react'

export default class ClassEvent extends Component {
    
    clickHandler = () => {
        alert('class click')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Event</button>
            </div>
        )
    }
}
