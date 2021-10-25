import React from 'react';
import CreateUser from "./components/user/CreateUser";
import UserList from "./components/user/UserList";


class App extends React.Component {
    render() {
        return (
            <div>
                <CreateUser/>
                <UserList/>
            </div>
        );
    }
}

export default App;