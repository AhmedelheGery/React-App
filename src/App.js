import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import User from './User/User';
import Users from './Users/Users';
import Callback from './Callback';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route exact path='/' component={Users}/>
        <Route exact path='/user/:userId' component={User}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default App;