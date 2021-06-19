import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div style={{border: '1px solid lime'}}>
                <h1>{this.props.user.name} </h1>
                <button onClick={() =>this.props.handleAddUser(this.props.user.name)}>Add User</button>
            </div>
        );
    }
}

export default User;