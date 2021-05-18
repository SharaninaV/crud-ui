import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { View } from './components/viewComponent';

const App = () => {

      const usersData = [
    { id: 1, name: 'James', surname: 'Bond'},
    { id: 2, name: 'John', surname: 'Snow'},
  ];

    return (
      <div className="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>CRUD React App</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h2>Add new user</h2>
          </div>
          <div class="col-lg-6">
            <h2>View users</h2>
            <View users={usersData} />
          </div>
        </div>
      </div>
    );
  }

export { App };
