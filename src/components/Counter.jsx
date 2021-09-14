import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };
    render() {
        return (
            <div className="border border-muted col-md-3">
                <span className="m-3">{this.formatCount()}</span>
                <button className="btn btn-success m-2">Increament</button>
            </div>
        );
    }

    formatCount(){
        const {count} = this.state
        return count === 0 ? "Zero" : count
    }
}

export default Counter;