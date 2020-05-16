export const getUsersSelector = state => state.usersPage.users;
export const getCount = state => state.usersPage.count;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getUsersNumber = state => state.usersPage.usersNumber;
export const getIsFetching = state => state.usersPage.isFetching;
export const getFollowingInProgress = state => state.usersPage.followingInProgress;