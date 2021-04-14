import React from 'react';
import {connect} from 'react-redux';
import {Users} from '../../components/Users/Users';
import Preloader from '../../components/UI/Preloader/Preloader';
import { follow, unfollow, getUsers, FilterType } from '../../redux/reducers/usersPageReducer';
import {
	getCount,
	getCurrentPage,
	getFollowingInProgress,
	getUsersNumber,
	getUsersSelector,
	getIsFetching, getUsersFilter
} from '../../redux/selectors/users-selectors';
import {UserType} from '../../types/types';
import {AppStateType} from '../../index';

type UsersContainerProps = MapDispatchPropsType & MapStatePropsType;

type MapDispatchPropsType = {
	getUsers: (page: number, count: number, term: string) => void,
	follow: (id: number) => void,
	unfollow: (id: number) => void
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
		const { currentPage, count, filter, getUsers } = this.props;

		getUsers(currentPage, count, filter);
	}

	onPageChanged = (pageNumber: number) => {
		const {count, filter} = this.props;
		this.props.getUsers(pageNumber, count, filter);
	};

	onFilterChanged = (filter: FilterType) => {
		const {count} = this.props;

		this.props.getUsers(1, count, filter);
	};

	render() {
		const { props } = this;

		if (props.isFetching) return <Preloader/>
		return (
			<Users
				usersNumber={props.usersNumber}
				count={props.count}
				currentPage={props.currentPage}
				users={props.users}
				follow={props.follow}
				unfollow={props.follow}
				onFilterChanged={ this.onFilterChanged }
				followingInProgress={props.followingInProgress}
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
	followingInProgress: getFollowingInProgress(state),
	filter: getUsersFilter(state)
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
	getUsers,
	follow,
	unfollow
})(UsersContainer);