import {HANDLE_BUTTON} from "../actionTypes";

export const buttonHandler = button => ({type: HANDLE_BUTTON, payload: {button}});
