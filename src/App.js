import React, { useState } from 'react';
import { useEffect } from 'react';
import { View } from './components/viewComponent';
import { Add } from './components/addComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [users, setUsers] = useState([]);
    const [needRefresh, setNeedRefresh] = useState(false);

    useEffect(() => {
      fetch('http://178.128.196.163:3000/api/records')
      .then((res) => res.json())
      .then((result) => setUsers(result))
      .catch(console.log);
    },[needRefresh]);


    const needRefreshToggle = () => {
      setNeedRefresh(!needRefresh)
    }

    const deleteUser = (id) => {
      setUsers(users.filter(user => user._id !== id));
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>CRUD React App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 add">
            <h2>Add new user</h2>
            <Add needRefreshToggle={needRefreshToggle}/>
          </div>
          <div className="col-lg-8">
            <h2>View users</h2>
            <View users={users} deleteUser={deleteUser} />
          </div>
        </div>
      </div>
    );
  }

export { App };
