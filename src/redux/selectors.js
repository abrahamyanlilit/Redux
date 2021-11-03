export const getUsersState = store => store.users;

export const getUserList = store =>
    getUsersState(store).users;

export const getSelectedPage = store => store.buttonHandler;

