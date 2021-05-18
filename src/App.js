import React, { useState } from 'react';
import { View } from './components/viewComponent';
import { Add } from './components/addComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

      const usersData = [
    { id: 1, name: 'James', surname: 'Bond'},
    { id: 2, name: 'John', surname: 'Snow'},
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>CRUD React App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2>Add new user</h2>
            <Add addUser={addUser} />
          </div>
          <div className="col-lg-6">
            <h2>View users</h2>
            <View users={users} />
          </div>
        </div>
      </div>
    );
  }

export { App };
