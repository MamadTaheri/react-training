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
                        this.state.users.map(user => (
                                <div key={user.id} className="col-4 text-center">
                                    <img src={user.avatar} style={{borderRadius: "50%", width: '100px'}} alt="" />
                                    <h4>{user.first_name} {user.last_name}</h4>
                                    <h5>{user.email}</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <button onClick={() => this.handleUpdate(user)} className="btn btn-info btn-sm">Update</button>
                                        </div>
                                        <div className="col-6">
                                            <button onClick={() => this.handleDelete(user)} className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    )
                  } 
               </div> 
                </div>
            </>
        );
    }

    handleCreate = async () => {
        const newUser = {
            first_name: 'mamad',
            last_name: 'taheri',
            email: 'm@tmail.com',
            avatar: 'https://i.guim.co.uk/img/media/1f8dc870561aa4f29e660b8481463d83c23f82e4/204_0_1236_742/master/1236.jpg?width=1020&quality=45&auto=format&fit=max&dpr=2&s=eb3e4526230f6bd387937f79e9388b10'
        }
        const response = await axios.post(this.baseURL, newUser);
        this.setState({users: [...this.state.users, newUser]});
    }

    handleUpdate = async (user) => {
        user.first_name = 'updated'
        const response = await axios.put(`${this.baseURL}/${user.id}`, user);
        console.log(response);
        const updatedUsers = [...this.state.users];
        const index = updatedUsers.indexOf(user);
        updatedUsers[index] = {...user};
        this.setState({users: updatedUsers});
    }

    handleDelete = async (user) => {
        const response = await axios.delete(`${this.baseURL}/${user.id}`);
        console.log(response);
        const updatedUsers = this.state.users.filter(q => q.id !== user.id);
        this.setState({users: updatedUsers});
    }
}

export default Users;