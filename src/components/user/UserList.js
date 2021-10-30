import React from "react";
import {connect} from "react-redux";
import User from "./User"
import {getUserList} from "../../redux/selectors";

const UserList = ({users}) => (
    <ol>
        {Object.keys(users).map(function (key, index) {
            return <User id={key} user={users[key]}/>
        })}
    </ol>
);

const mapStateToProps = state => {
    const users = getUserList(state);
    return {users}
}
export default connect(mapStateToProps)(UserList);
