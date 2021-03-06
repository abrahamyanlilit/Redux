import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import CreateUser from "./components/user/CreateUser";
import UserList from "./components/user/UserList";
import {connect} from "react-redux";
import {getSelectedPage, getUserList} from "./redux/selectors";
import {BUTTON_HANDLER} from "./constants";
import {selectPage} from "./redux/actions/appActions";
import EditUser from "./components/user/EditUser";
import {editUser} from "./redux/actions/userActions";


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
        else if (this.props.selectedPage === BUTTON_HANDLER.EDIT_USER) {
            const id = this.props.editedUserId;
            const user = this.props.userList.filter(function (obj) {
                return obj.id === id;
            })[0];
            showPage = <div><EditUser user={user}/></div>
        }

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
    const userList = getUserList(state);
    const editedUserId = getSelectedPage(state).editUserId;
    return {selectedPage, userList, editedUserId};
}

export default connect(mapStateToProps, {selectPage})(App);