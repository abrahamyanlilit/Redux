import {CREATE_USER, DELETE_USER, EDIT_USER} from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER: {
            const {id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: content
                }
            };
        }
        // case DELETE_USER: {
        //     const {id} = action.payload;
        //     return{
        //         ...state,
        //         delete byIds[id];
        //     }
        // }

        default:
            return state;
    }
}

export default users;
