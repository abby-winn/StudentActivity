AddUser.js


import React, {useState} from 'react';
import './AddUser.css';
const AddUser = props => {
    function addUserHandler(event) {
        event.preventDefault();
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number"></input>
            <Button type="submit">Add User</Button>
            <Card>
	        <form onSubmit={addUserHandler}>
       		     … (code added previously)
	        </form>
            </Card>
        </form>
    );
};

export default AddUser; 