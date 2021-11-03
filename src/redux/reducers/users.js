import {CREATE_USER, DELETE_USER, EDIT_USER} from "../actionTypes";
import {forEach} from "react-bootstrap/ElementChildren";

const initialState = {
    users: [
        {
            "id": 1,
            "first_name": "Anna",
            "last_name": "Hovakimyan",
            "age": 33,
            "email": "aaaa@gmail.com",
            "phone": "077079798",
            "gender": "female"
        },
        {
            "id": 2,
            "first_name": "Alla",
            "last_name": "Sargsyan",
            "age": 23,
            "email": "bbbb@gmail.com",
            "phone": "077079798",
            "gender": "female"
        },
        {
            "id": 3,
            "first_name": "Aram",
            "last_name": "Sargsyan",
            "age": 60,
            "email": "cccc@gmail.com",
            "phone": "077079798",
            "gender": "male"
        },
        {
            "id": 4,
            "first_name": "Suren",
            "last_name": "Harutyunyan",
            "age": 55,
            "email": "dddd@gmail.com",
            "phone": "077079798",
            "gender": "male"
        },
        {
            "id": 5,
            "first_name": "Samvel",
            "last_name": "Gevorgyan",
            "age": 22,
            "email": "eeee@gmail.com",
            "phone": "077079798",
            "gender": "male"
        },
    ]
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER: {
            const {id, content} = action.payload;
            content.id = id;
            state.users.push(content);
            return {
                users: state.users
            }
        }
        case EDIT_USER: {
            const {content} = action.payload;
            for (let i = 0; i < state.users.length; i++) {
                if (content.id === state.users[i].id) {
                    state.users[i] = content;
                    break;
                }
            }
            return {
                users: state.users
            }
        }

        case DELETE_USER: {
            const {id} = action.payload;
            let new_state = {users: []};
            state.users.forEach(function (obj) {
                if (obj.id !== id)
                    new_state.users.push(obj);
            })
            return new_state;
        }
        default:
            return state;
    }
}

export default users;
