import axios from 'axios';
import React, { Component } from 'react';

class Login extends Component {

    baseURL = "https://reqres.in/api/users";

    state = {
        account: {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render() {
        const {email, password} = this.state.account;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='email'>Email:</label>
                    <input onChange={this.handleChange} id='email' name='email' 
                        className='form-control' type="text" value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor='password'>Password:</label>
                    <input onChange={this.handleChange} id='password' name='password' 
                        className='form-control' type="text" value={password}/>
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
        );
    }
}

export default Login;