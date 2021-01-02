import React from 'react';
import {connect} from 'react-redux';
import {Users} from '../../components/Users/Users';
import Preloader from '../../components/UI/Preloader/Preloader';
import {followUnfollow, getUsers} from '../../redux/reducers/usersPageReducer';
import {
	getCount,
	getCurrentPage,
	getFollowingInProgress,
	getUsersNumber,
	getUsersSelector,
	getIsFetching
} from '../../redux/selectors/users-selectors';
import {UserType} from '../../types/types';
import {AppStateType} from '../../index';

type UsersContainerProps = MapDispatchPropsType & MapStatePropsType;

type MapDispatchPropsType = {
	getUsers: (page: number, count: number) => void,
	followUnfollow: (id: number, followed: boolean) => void
};

type MapStatePropsType = {
	users: Array<UserType>,
	count: number,
	currentPage: number,
	usersNumber: number,
	isFetching: boolean,
	followingInProgress: Array<number>
};

class UsersContainer extends React.Component<UsersContainerProps> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.count);
	}

	onPageChanged = (pageNumber: number) => {
		const {count} = this.props;
		this.props.getUsers(pageNumber, count);
	};

	render() {
		if (this.props.isFetching) return <Preloader/>
		return (
			<Users
				usersNumber={this.props.usersNumber}
				count={this.props.count}
				currentPage={this.props.currentPage}
				users={this.props.users}
				followUnfollow={this.props.followUnfollow}
				followingInProgress={this.props.followingInProgress}
				onPageChanged={this.onPageChanged}
			/>
		);
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	users: getUsersSelector(state),
	count: getCount(state),
	currentPage: getCurrentPage(state),
	usersNumber: getUsersNumber(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
	getUsers,
	followUnfollow
})(UsersContainer);