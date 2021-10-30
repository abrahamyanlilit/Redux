import React from "react";
import {connect} from "react-redux";
import {editUser} from "../../redux/actions/userActions";
import {getUserById, getUserList} from "../../redux/selectors";

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     first_name: this.props.user.first_name,
        //     last_name: this.props.user.last_name,
        //     age: this.props.user.age,
        //     email: this.props.user.email,
        //     phone: this.props.user.phone
        // };
    }


    // updateFirstName = firstName => {
    //     this.setState({first_name: firstName});
    // };
    //
    // updateLastName = lastName => {
    //     this.setState({last_name: lastName});
    // };
    // updateAge = age => {
    //     this.setState({age: age});
    // };
    // updateEmail = email => {
    //     this.setState({email: email});
    // };
    // updatePhone = phone => {
    //     this.setState({phone: phone});
    // };
    //
    // handleClickEditUser = (id) => {
    //     this.props.editUser(id, {
    //         first_name: this.state.first_name,
    //         last_name: this.state.last_name,
    //         age: this.state.age,
    //         email: this.state.email,
    //         phone: this.state.phone
    //     });
    // };

    render() {
        return (
            <div>
                <input type="text" placeholder="First name"/><br/><br/>
                <input type="text" placeholder="Last name"/><br/><br/>
                <input type="text" placeholder="Age"/><br/><br/>
                <input type="email" placeholder="Email"/><br/><br/>
                <input type="phone" placeholder="Phone"/><br/><br/>
                <button>Save</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const users = getUserList(state);
    return {users}
}

export default connect(mapStateToProps,
    {editUser})(EditUser);