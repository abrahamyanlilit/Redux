import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import CreateUser from "./components/user/CreateUser";
import UserList from "./components/user/UserList";
import {connect} from "react-redux";
import {getSelectedPage, getUserById} from "./redux/selectors";
import {BUTTON_HANDLER} from "./constants";
import {selectPage} from "./redux/actions/appActions";
import EditUser from "./components/user/EditUser";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let showPage;
        if (this.props.selectedPage === BUTTON_HANDLER.USERS)
            showPage = <div><UserList/></div>;
        else if (this.props.selectedPage === BUTTON_HANDLER.CREATE_USER)
            showPage = <div><CreateUser/></div>;
        else if (this.props.selectedPage === BUTTON_HANDLER.EDIT_USER)
            showPage = <div><EditUser user={this.props.user} id={this.props.editedUserId}/></div>

        return (
            <>
                <div>
                    <Button className="m-3" onClick={() => this.props.selectPage(BUTTON_HANDLER.USERS)}>Users</Button>
                    <Button className="m-3"
                            onClick={() => this.props.selectPage(BUTTON_HANDLER.CREATE_USER)}><BsFillPersonLinesFill/></Button>
                </div>
                {showPage}
            </>
        );
    }
}

const mapStateToProps = state => {
    const selectedPage = getSelectedPage(state).pageName;
    const editedUserId = getSelectedPage(state).editUserId;
    const user = getUserById(state, editedUserId);

    return {selectedPage, editedUserId, user};
}

export default connect(mapStateToProps, {selectPage})(App);