import React from "react";


const User = ({user})  => (
    <li>
        <span>First name : {user.first_name}</span>
        <span>Last name : {user.last_name}</span>
    </li>
);

export default User;
