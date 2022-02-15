import React, { Component } from 'react';

class UserForm extends Component {
    stat= {
        step: 1,
        firstName: '',
        lastName: '',
        emai: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next Step
    nextStep = () => {
        const { step } = this.stat;
        this.setState({
            step: step + 1
        })
    }

    // Go back to previos step
    prevStep = () => {
        const { step } = this.stat;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.stat;
        const { firstName, lastName, email, occupation, city, bio } = this.stat;
        const values = {firstName, lastName, email, occupation, city, bio}
        return (
            <div>
                
            </div>
        );
    }
}

export default UserForm;