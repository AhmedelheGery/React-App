import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Users extends Component{

    // [1] _ OUR CONSTRUCTOR
    constructor(props) {
        super(props);
    
        // Q STATE THAT TRIGER DIDMOUNT FUN
        this.state = {
          users: null,
        };
    }

    // [2] _ ASYNC FUNCTION
    async componentDidMount() {
        const users = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
        this.setState({
          users,
        });
    }

    // [3] _ RENDER METHOD
    render() {
        return (
          <div className="container">
            <div className="row">
              {this.state.users === null && <p>Loading users...</p>}
              {
                this.state.users && this.state.users.map(user => (
                  <div key={user.id} className="col-sm-12 col-md-4 col-lg-3">
                    <Link to={`/user/${user.id}`}>
                      <div className="card text-white bg-success mb-3">
                        <div className="card-header">User Information</div>
                        <div className="card-body">
                          <h4 className="card-title">{user.name}</h4>
                          <p className="card-text"><span className="font-weight-bold">Email</span> : {user.email}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }

}

export default Users;
