import React from "react";
import { connect } from "react-redux";
import { Users } from "../../components/Users/Users";
import Preloader from "../../components/UI/Preloader/Preloader";
import { followUnfollow, getUsers } from "../../redux/reducers/usersPageReducer";
import {
	getCount,
	getCurrentPage,
	getFollowingInProgress,
	getUsersNumber,
	getUsersSelector,
	getIsFetching
} from "../../redux/selectors/users-selectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.count);
	}

	onPageChanged = (pageNumber) => {
		const { count } = this.props;
		this.props.getUsers(pageNumber, count);
	}

	render() {
		if (this.props.isFetching) return <Preloader />
		return (
			<Users
				usersNumber={this.props.usersNumber}
				count={this.props.count}
				currentPage={this.props.currentPage}
				users={this.props.users}
				followUnfollow={this.props.followUnfollow}
				isFetching={this.props.isFetching}
				toggleFetching={this.props.toggleFetching}
				setCurrentPage={this.props.setCurrentPage}
				setUsers={this.props.setUsers}
				setUsersNumber={this.props.setUsersNumber}
				followingInProgress={this.props.followingInProgress}
				toggleFollowingProgress={this.props.toggleFollowingProgress}
				onPageChanged={this.onPageChanged}
			/>
		);
	}
}

const mapStateToProps = state => ({
	users: getUsersSelector(state),
	count: getCount(state),
	currentPage: getCurrentPage(state),
	usersNumber: getUsersNumber(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
})

export default connect(mapStateToProps, { getUsers, followUnfollow })(UsersContainer);