import React from "react";
import {connect} from "react-redux";
import User from "./User"
import {getUserList} from "../../redux/selectors";

const UserList = ({users}) => (
    <ol>


        {users.map(function (key) {
            return <User user={key}/>
        })}
    </ol>
);

const mapStateToProps = state => {
    const users = getUserList(state);
    console.log("users " + JSON.stringify(users));
    return {users};

}
export default connect(mapStateToProps)(UserList);
