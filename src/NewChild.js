import React, { Component } from 'react'

export default class NewChild extends Component {
    render() {
        return (
            <div>
                <p>Total product: {this.props.number}</p>
            </div>
        )
    }
}
