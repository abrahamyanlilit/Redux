import {BUTTON_HANDLER} from "../../constants";
import {CREATE_USER, SELECT_PAGE} from "../actionTypes";

const initialState = BUTTON_HANDLER.NONE;

const buttonHandler = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PAGE: {
            return action.payload.pageName;
        }
        case CREATE_USER: {
            return BUTTON_HANDLER.USERS;
        }
        default: {
            return state;
        }
    }
}

export default buttonHandler;