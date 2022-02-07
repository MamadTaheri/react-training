import React, { Component } from 'react';
import Input from '../components/Input';
import * as yup from 'yup';
import axios from 'axios';

class Login extends Component {

    baseUserURL = "https://reqres.in/api/users";
    baseLoginURL = "https://reqres.in/api/login";

    state = {
        account: {
            email: '',
            password: ''
        },
        errors: [],
        sending: false
    }

    schema = yup.object().shape({
        email: yup.string().email('فرمت ایمیل صحیح نمی باشد').required('فیلد ایمیل الزامی می باشد'),
        password: yup.string().min(4,'پسورد حداقل 4 کاراکتر باشد')
    });

    validate = async () => {
        try{
            const result = await this.schema.validate(this.state.account, {abortEarly: false});
            return result;
        } catch(error){
            console.log(error.errors);
            this.setState({errors: error.errors});
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await this.validate();
        console.log(result);
        if(result) {
            try {
                this.setState({sending: true})
                const response = await axios.post(this.baseLoginURL, result);
                console.log(response);
                this.setState({sending: false})
            } catch (error) {
                this.setState({sending: false})
                this.setState({errors: ['ایمیل یا پسورد صحیح نمی باشد']})
            }
        }
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render() {
        const {email, password} = this.state.account;
        return (
            <>
            {
                this.state.errors.length !==0 && (
                    <div className="alert alert-danger">
                        <ul>
                            {
                                this.state.errors.map((item, i) => <li key={i}>{item}</li>)
                            }
                        </ul>
                    </div>
                )
            }
                <form onSubmit={this.handleSubmit}>
                <Input name='email' value={email} label='Email' onChange={this.handleChange} />
                <Input name='password' value={password} label='Password' onChange={this.handleChange} />
                <button disabled={this.state.sending} className='btn btn-primary'>Login</button>
            </form>
            </>
        );
    }
}

export default Login;