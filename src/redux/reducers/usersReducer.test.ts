import {actions, InitialStateType, usersPageReducer} from './usersPageReducer';

let state: InitialStateType;

beforeEach(() => {
	state = {
		users: [
			{ id: 1, name: 'Dima', followed: false, photos: { large: null, small: null }, status: 'status1' },
			{ id: 2, name: 'Dima1', followed: true, photos: { large: null, small: null }, status: 'status2' },
			{ id: 3, name: 'Dima2', followed: true, photos: { large: null, small: null }, status: 'status3' },
			{ id: 4, name: 'Dima3', followed: false, photos: { large: null, small: null }, status: 'status14' }
		],
		currentPage: 1,
		count: 10,
		usersNumber: 0,
		isFetching: true,
		followingInProgress: []
	};
})

test('follow success', () => {
	const newState = usersPageReducer(state, actions.followSuccess(4))

	expect(newState.users[0].followed).toBeFalsy();
	expect(newState.users[3].followed).toBeTruthy();
});

test('unfollow success', () => {
	const newState = usersPageReducer(state, actions.unfollowSuccess(3))

	expect(newState.users[1].followed).toBeTruthy();
	expect(newState.users[2].followed).toBeFalsy();
});