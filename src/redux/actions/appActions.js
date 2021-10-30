import {SELECT_PAGE} from "../actionTypes";

export const selectPage = (pageName, editUserId = 0) => ({
    type: SELECT_PAGE,
    payload: {pageName, editUserId}
});
