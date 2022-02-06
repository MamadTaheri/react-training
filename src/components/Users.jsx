import React, { Component } from 'react';

class Users extends Component {
    state = {
        users: []
    }

    render() {
        return (
            <>
               <button onClick={this.handleCreate} className='btn btn-lg btn-primary'>create</button>
               <div className="row">
                  {
                      this.state.users.map(user => {
                          return (
                              <div className="col-4 text-center p-5">
                                  <img src={user.avatar} style={{borderRadius: "50%", width: '100px'}} alt="" />
                                  <h4>{user.first_name} {user.last_name}</h4>
                                  <h5>{user.email}</h5>
                                  <div className="row">
                                      <div className="col-6">
                                          <button onClick={this.handleUpdate} className="btn btn-info btn-sm">Update</button>
                                          <button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button>
                                      </div>
                                  </div>
                              </div>
                          )
                      })
                  } 
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