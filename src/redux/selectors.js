export const getUsersState = store => store.users;

export const getUserList = store =>
    getUsersState(store) && getUsersState(store).byIds;

export const getUserById = (store, id) => getUsersState(store).byIds[id];

export const getSelectedPage = store => store.buttonHandler;