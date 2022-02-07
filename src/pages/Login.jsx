import axios from 'axios';
import React, { Component } from 'react';
import Input from '../components/Input';

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
                <Input name='email' value={email} label='Email' onChange={this.handleChange} />
                <Input name='password' value={password} label='Password' onChange={this.handleChange} />
                <button className='btn btn-primary'>Login</button>
            </form>
        );
    }
}

export default Login;