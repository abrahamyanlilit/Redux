import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {deleteUser} from "../../redux/actions/userActions";
import {connect} from "react-redux";
import {BUTTON_HANDLER} from "../../constants";
import {selectPage} from "../../redux/actions/appActions";

const User = ({user, deleteUser, selectPage}) => (
    <div>
        <span>Id: {user.id}</span>
        <span> First name: {user.first_name} </span>
        <span> Last name: {user.last_name} </span>
        <span> Age: {user.age} </span>
        <span> Email: {user.email} </span>
        <span> Phone: {user.phone} </span>
        <Button className="m-2" onClick={() => selectPage(BUTTON_HANDLER.EDIT_USER, user.id)}>Edit</Button>
        <Button className="m-2" onClick={() => deleteUser(user.id)}>Delete</Button>
    </div>

);

export default connect(null, {deleteUser, selectPage})(User);

