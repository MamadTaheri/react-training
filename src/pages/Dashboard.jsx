import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

axios.defaults.headers.common['token'] = localStorage.getItem('token');

const Dashboard = () => {

  useEffect( () => {
    console.log("dashboard");
    axios.get('https://reqres.in/api/unknown')
    .then(response => console.log(response.data))
  }, [])

    return (
        <div>
          Dashboard page  
        </div>
    );
};

export default Dashboard;