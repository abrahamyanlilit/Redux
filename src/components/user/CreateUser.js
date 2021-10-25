import React from "react";
import {connect} from "react-redux";
import {createUser} from "../../redux/actions/userActions";

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {first_name: "", last_name: ""};
    }

    updateFirstName = firstName => {
        this.setState({first_name: firstName});
    };

    handleAddUser = () => {
        this.props.createUser({first_name: this.state.first_name});
    };

    render() {
        return (
            <div>
                <input onChange={e => this.updateFirstName(e.target.value)}/>
                <button onClick={this.handleAddUser}>Save</button>
            </div>
        )
    }
}

export default connect(null,
    {createUser})(CreateUser);