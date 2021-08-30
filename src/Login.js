import React, { Component } from 'react'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIN: false
        }
    }

    render() {
       return( 
        <div>
            {/* {this.state.isLoggedIN ? <h1>Welcome</h1> : <button>Login</button> } */}

            {this.state.isLoggedIN && <h1>Welcome</h1>}

        </div>
       )
    }
}

export default Login