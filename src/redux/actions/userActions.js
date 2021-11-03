import {CREATE_USER} from "../actionTypes";
import {DELETE_USER} from "../actionTypes";
import {EDIT_USER} from "../actionTypes";

let nextUserId = 5;

export const createUser = (content) => ({
    type: CREATE_USER,
    payload: {
        id: ++nextUserId,
        content
    }
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: {id}
})

export const editUser = (content) => ({
    type: EDIT_USER,
    payload: {
        content: content
    }
})
