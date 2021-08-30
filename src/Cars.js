import React, { Component } from 'react'

export default class Cars extends Component {

    constructor() {
        super();
        this.state = {
            cars: ["Ferrari", "Benz", "Bmw", "206"]
        }
    }

    render() {
        return (
            <div>
                <h1>My Cars:</h1>
                {this.state.cars.map(car => <p>Hi my name is :{car}</p>)}
            </div>
        )
    }
}
