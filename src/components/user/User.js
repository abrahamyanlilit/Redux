import React from "react";
import Button from 'react-bootstrap/Button';

const User = ({user}) => (
    <li>
        <div>
            <span> First name: {user.first_name} </span>
            <span> Last name: {user.last_name} </span>
            <span> Age: {user.age} </span>
            <span> Email: {user.email} </span>
            <span> Phone: {user.phone} </span>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    </li>
);

export default User;
