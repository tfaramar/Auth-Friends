import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Login}/>
      <PrivateRoute exact path='/friendslist' component={FriendsList}/>
    </div>
  );
}

export default App;
