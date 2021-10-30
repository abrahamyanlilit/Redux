import React from "react";
import {connect} from "react-redux";
import {createUser} from "../../redux/actions/userActions";

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {first_name: "", last_name: "", age: "", email: "", phone: ""};
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

    handleAddUser = () => {
        this.props.createUser({
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
                <input type="text" placeholder="First name"
                       onChange={e => this.updateFirstName(e.target.value)}/><br/><br/>
                <input type="text" placeholder="Last name"
                       onChange={e => this.updateLastName(e.target.value)}/><br/><br/>
                <input type="text" placeholder="Age" onChange={e => this.updateAge(e.target.value)}/><br/><br/>
                <input type="email" placeholder="Email" onChange={e => this.updateEmail(e.target.value)}/><br/><br/>
                <input type="phone" placeholder="Phone" onChange={e => this.updatePhone(e.target.value)}/><br/><br/>
                <button onClick={this.handleAddUser}>Save</button>
            </div>
        )
    }
}

export default connect(null,
    {createUser})(CreateUser);