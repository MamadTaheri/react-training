import React, { Component } from 'react'

class Child extends Component {

    constructor(props){
        super(props);
        this.input = React.createRef();
    }

    showRef = () => {
        console.log(this.input.current.value)
    }

    componentDidMount() {
        this.input.current.focus()
    }

    render() {
        return (
            <div>
                <button onClick={this.showRef}>Show</button>
                <input ref={this.input} type="text"/>
            </div>
        )
    }
}

export default Child