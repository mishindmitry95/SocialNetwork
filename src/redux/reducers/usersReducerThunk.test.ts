import {actions, followUnfollow} from './usersPageReducer';
import {userAPI} from '../../api/user-api';
import {APIResponseType, ApiResultCode} from '../../api/api';

jest.mock('../../api/user-api');

// Fake dispatch
const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const userAPIMock = userAPI as jest.Mocked<typeof userAPI>;
const result: APIResponseType = {
	resultCode: ApiResultCode.success,
	messages: [],
	data: {}
};

userAPIMock.userFollow.mockReturnValue(Promise.resolve(result));

beforeEach(() => {
	dispatchMock.mockClear();
	getStateMock.mockClear();
	userAPIMock.userFollow.mockClear();
});

test('success follow thunk', async () => {
	const thunk = followUnfollow(1, false);

	await thunk(dispatchMock, getStateMock, {});

	// Диспатч произошел 3 раза
	expect(dispatchMock).toBeCalledTimes(3);
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1));
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});