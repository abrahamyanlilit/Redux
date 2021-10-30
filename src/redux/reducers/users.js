import {CREATE_USER, DELETE_USER, EDIT_USER} from "../actionTypes";

const initialState = {
    byIds: {
        1: {
            "first_name": "Anna",
            "last_name": "Hovakimyan",
            "age": 33,
            "email": "aaaa@gmail.com",
            "phone": "077079798",
            "gender": "female"
        },
        2: {
            "first_name": "Alla",
            "last_name": "Sargsyan",
            "age": 23,
            "email": "bbbb@gmail.com",
            "phone": "077079798",
            "gender": "female"
        },
        3: {
            "first_name": "Aram",
            "last_name": "Sargsyan",
            "age": 60,
            "email": "cccc@gmail.com",
            "phone": "077079798",
            "gender": "male"
        },
        4: {
            "first_name": "Suren",
            "last_name": "Harutyunyan",
            "age": 55,
            "email": "dddd@gmail.com",
            "phone": "077079798",
            "gender": "male"
        },
        5: {
            "first_name": "Samvel",
            "last_name": "Gevorgyan",
            "age": 22,
            "email": "eeee@gmail.com",
            "phone": "077079798",
            "gender": "male"
        },
    }
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_USER:
        case CREATE_USER: {
            const {id, content} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: content
                }
            };
        }
        case DELETE_USER: {
            const {id} = action.payload;
            // delete state.byIds[id];
            let new_state = {byIds: {}}
            for (let key in state.byIds) {
                if (key !== id) {
                    new_state.byIds[key] = state.byIds[key];
                }
            }
            return new_state;
        }

        default:
            return state;
    }
}

export default users;
