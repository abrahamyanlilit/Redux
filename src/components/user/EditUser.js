import React from "react";
import {connect} from "react-redux";
import {editUser} from "../../redux/actions/userActions";

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.user = this.props.user;
        this.state = {
            id: this.user.id,
            first_name: this.user.first_name,
            last_name: this.props.user.last_name,
            age: this.props.user.age,
            email: this.props.user.email,
            phone: this.props.user.phone
        };
    }

    updateFirstName = firstName => {
        this.setState({first_name: firstName});
    };

    updateLastName = lastName => {
        this.setState({last_name: lastName});
    };
    updateAge = age => {
        this.setState({age: age});
    };
    updateEmail = email => {
        this.setState({email: email});
    };
    updatePhone = phone => {
        this.setState({phone: phone});
    };

    handleClickEditUser = () => {
        console.log("OK");
        this.props.editUser({
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone
        });
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="First Name" value={this.state.first_name}
                       onChange={e => this.updateFirstName(e.target.value)}/><br/><br/>
                <input type="text" placeholder="Last name" value={this.state.last_name}
                       onChange={e => this.updateLastName(e.target.value)}/><br/><br/>
                <input type="text" placeholder="Age" value={this.state.age}
                       onChange={e => this.updateAge(e.target.value)}/><br/><br/>
                <input type="email" placeholder="Email" value={this.state.email}
                       onChange={e => this.updateEmail(e.target.value)}/><br/><br/>
                <input type="phone" placeholder="Phone" value={this.state.phone}
                       onChange={e => this.updatePhone(e.target.value)}/><br/><br/>
                <button onClick={() => this.handleClickEditUser()}>Save</button>
            </div>
        )
    }
}

export default connect(null,
    {editUser})(EditUser);