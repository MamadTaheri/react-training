import React, { PureComponent } from 'react'

class Child extends PureComponent {
    render() {
        console.log("Child is rendered")
        return (
            <div>
                Chils {this.props.text}
            </div>
        )
    }
}

export default Child