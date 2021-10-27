import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const User = ({user}) => (
    <li>
        <div>
            <span> First name: {user.first_name} </span>
            <span> Last name: {user.last_name} </span>
            <span> Age: {user.age} </span>
            <span> Email: {user.email} </span>
            <span> Phone: {user.phone} </span>
            <Button className="m-2">Edit</Button>
            <Button className="m-2">Delete</Button>
        </div>
    </li>
);

export default User;
