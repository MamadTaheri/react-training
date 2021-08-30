import React, { Component } from 'react'

export default class UserC extends Component {
    constructor(){
        super();
        this.state = {
            name: "Mamad",
            age: 24,
        }
    }

    render() {
        const {name, age} = this.state
        const {LastName,career} = this.props
        return (
            <div>
                {/* <p>Hi I am {this.state.name} and I am {this.state.age} years old</p> */}
                <p>Hi I am {name} {LastName} and I am {age} years old</p>
                <p>I am {career}</p>
            </div>
        )
    }
}
