import React from 'react';
import Navbar from './UI/Navbar';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {Switch, Route, Redirect} from 'react-router-dom'
import User from './pages/User';
import NotFound from './pages/NotFound';


const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path='/users/:id' component={User} exact/>
                    <Route path='/users' render={(props) => <Users {...props} />} exact/>
                    <Route path='/login' component={Login} exact/>
                    <Route path='/register' component={Register} exact/>
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