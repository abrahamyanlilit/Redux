export const getUsersState = store => store.users;

export const getUserList = store =>
    getUsersState(store) && getUsersState(store).byIds;