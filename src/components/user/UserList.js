import React from "react";
import {connect} from "react-redux";
import User from "./User"
import {getUserList} from "../../redux/selectors";

const UserList = ({ users }) => (
    <ol>
        {Object.keys(users).map(function(key, index) {
            return <User key={key} user={users[key]}/>
        })}
    </ol>
);

const mapStateToProps = state =>{
    const users = getUserList(state);
    Object.keys(users).forEach(function(key, index) {
         console.log(users[key].first_name + " --- 000")});
    return {users}
}
export default connect(mapStateToProps)(UserList);
