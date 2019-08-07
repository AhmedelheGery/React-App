import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    
    // [1] _ CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
          user: null,
        };
    }

    // [2] _ ASYNC DIDMOUNT FUN
    async componentDidMount() {
        const { match: { params } } = this.props;
        const user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)).data;
        this.setState({
          user,
        });
      }

      // [3] _ OUR RENDER METHOD
      render() {
        const {user} = this.state;
        if (user === null) return <p>Loading User Info...</p>;
        return (
          <div className="container">
            <div className="row">
              <div className="jumbotron col-12">
                <h1 className="display-3">{user.name}</h1>
                <p className="lead"><span className="font-weight-bold">Username</span>: {user.username}</p>
                <p className="lead"><span className="font-weight-bold">Email</span>: {user.email}</p>
                <p className="lead"><span className="font-weight-bold">Phone</span>: {user.phone}</p>
                <p className="lead"><span className="font-weight-bold">Website</span>: {user.website}</p>
                <p className="lead"><span className="font-weight-bold">Company</span>: {user.company.name}</p>
              </div>
            </div>
          </div>
        )
      }

}

export default User;
