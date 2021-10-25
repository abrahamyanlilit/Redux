import React from "react";
import Button from 'react-bootstrap/Button';
const User = ({user})  => (
    <li>
        <span>First name: {user.first_name}</span><br/>
        <span>Last name: {user.last_name}</span><br/>
        <span>Age: {user.age}</span><br/>
        <span>Email: {user.email}</span><br/>
        <span>Phone: {user.phone}</span><br/>
        <Button>Edit</Button>
        <button>Delete</button>
    </li>
);

export default User;
