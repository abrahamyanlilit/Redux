import {BUTTON_HANDLER} from "../../constants";
import {CREATE_USER, EDIT_USER, SELECT_PAGE} from "../actionTypes";

const initialState = {pageName: BUTTON_HANDLER.NONE}


const buttonHandler = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PAGE: {
            return action.payload;
        }
        case EDIT_USER:
        case CREATE_USER: {
            return {pageName: BUTTON_HANDLER.USERS};
        }
        default: {
            return state;
        }
    }
}

export default buttonHandler;