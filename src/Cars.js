import React, { Component } from 'react'

import { v4 } from 'uuid';

export default class Cars extends Component {

    constructor() {
        super();
        this.state = {
            cars: [
                {id: 1,name: "Ferrari"}, 
                {id: 2,name: "Benz"}, 
                {id: 3,name: "Bmw"}, 
                {id: 4,name: "206"}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>My Cars:</h1>
                {this.state.cars.map(car => <p key={v4()}>Hi my name is :{car.name} ***-> {v4()}</p>)}
            </div>
        )
    }
}
