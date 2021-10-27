import {SELECT_PAGE} from "../actionTypes";

export const selectPage = pageName => ({
    type: SELECT_PAGE,
    payload: {pageName}
});
