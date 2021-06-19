import React, { Component } from 'react';
import User from './User';

class Home extends Component {
    constructor(props) {
        super(props)   
        this.state = {
             users: [],
             cart: []
        }
        this.handleAddUser = this.handleAddUser.bind(this)
    }
    handleAddUser(user){
       const newCart = [...this.state.cart, user];
       this.setState({cart: newCart});
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({users:data}))
    }
    render() {
        return (
            <div>
                <h3>Users: {this.state.users.length}</h3>
                <h2> Users added : {this.state.cart.length} </h2>
                {
                    this.state.users.map((user, index)=> <User key={index} user={user} handleAddUser={this.handleAddUser}></User>)
                }
            </div>
        );
    }
}

export default Home;