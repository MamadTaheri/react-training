import axios from 'axios';
import React, { Component } from 'react';
import LoadingUsers from './loading/LoadingUsers';

class Users extends Component {

    state = {
        users: [],
        isLoading: true
    }

    baseURL = "https://reqres.in/api/users/";

    async componentDidMount() {
        const response = await axios.get(this.baseURL);
        setTimeout(() => {
            this.setState({
                users: response.data.data,
                isLoading: false
            });
        }, 1200);
    }

    render() {
        return (
            <>
               <button onClick={this.handleCreate} className='btn btn-lg btn-primary'>create</button>
                <div className="container">
                <div className="row">
                  {
                    this.state.isLoading ? (
                        <LoadingUsers />
                    ) : (
                        this.state.users.map(user => {
                            return (
                                <div className="col-4 text-center">
                                    <img src={user.avatar} style={{borderRadius: "50%", width: '100px'}} alt="" />
                                    <h4>{user.first_name} {user.last_name}</h4>
                                    <h5>{user.email}</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <button onClick={this.handleUpdate} className="btn btn-info btn-sm">Update</button>
                                        </div>
                                        <div className="col-6">
                                            <button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                  } 
               </div> 
                </div>
            </>
        );
    }

    handleCreate = () => {
        //
    }

    handleUpdate = (user) => {
        //
    }

    handleDelete = (user) => {
        //
    }
}

export default Users;