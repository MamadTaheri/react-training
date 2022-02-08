import React from 'react';
import Navbar from './UI/Navbar';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {Switch, Route, Redirect} from 'react-router-dom'
import User from './pages/User';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const App = () => {
    const [user, setUser] = useState(null);

    const baseTokenURL = "https://reqres.in/api/userbytoken";

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            setUser(null);
            return;
        }
        // await axios.post(baseTokenURL, {token});
        const response = {
            data: {
                user: {
                    name: 'mamad',
                    email: 'mamad@tmail.com'
                }
            }
        }
        if(!response.data.user){
            setUser(null);
            return;
        }
        setUser(response.data.user);
    }, [])
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path='/users/:id' component={User} exact/>
                    <Route path='/users' render={(props) => <Users {...props} />} exact/>
                    <Route path='/login' component={Login} exact/>
                    <Route path='/register' component={Register} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Redirect from='/customers' to='/users' />
                    <Route path='/not-found' component={NotFound}/>
                    <Route path='/' component={Home} exact/>
                    <Redirect to="/not-found" />
                </Switch>
            </div>



        </>
    );
};

export default App;