import React from "react";
import { connect } from "react-redux";
import {
	follow,
	setCurrentPage,
	setUsers,
	setUsersNumber,
	toggleFetching,
	toggleFollowingProgress,
	unfollow
} from "../../actions/actions";
import { Users } from "../../components/Users/Users";
import { userAPI } from "../../api/api";
import Preloader from "../../components/UI/Preloader/Preloader";

class UsersContainer extends React.Component {
	componentDidMount() {
		userAPI.getUsers(this.props.currentPage, this.props.count)
			.then(data => {
				this.props.setUsers(data.items);
				this.props.setUsersNumber(data.totalCount)
				this.props.toggleFetching(false);
			}).catch(e => console.error(e));
	}

	get pages() {
		// const pagesCount = Math.ceil((this.props.usersNumber / this.props.count));
		let pagesArray = [];
		//TODO т.к страниц 3000, пока ограничим 5, потом сделать нормально, и добавить,
		// чтобы при пустом массиве, ничего не отображалось
		for ( let i=1; i <= 5; i++ ) {
			pagesArray.push(i);
		}
		return pagesArray
	}

	render() {
		if (this.props.isFetching) return <Preloader />
		return (
			<Users
				usersNumber={this.props.usersNumber}
				count={this.props.count}
				currentPage={this.props.currentPage}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				isFetching={this.props.isFetching}
				pages={this.pages}
				toggleFetching={this.props.toggleFetching}
				setCurrentPage={this.props.setCurrentPage}
				setUsers={this.props.setUsers}
				setUsersNumber={this.props.setUsersNumber}
				followingInProgress={this.props.followingInProgress}
				toggleFollowingProgress={this.props.toggleFollowingProgress}
			/>
		);
	}
}

const mapStateToProps = state => ({
	users: state.usersPage.users,
	count: state.usersPage.count,
	currentPage: state.usersPage.currentPage,
	usersNumber: state.usersPage.usersNumber,
	isFetching: state.usersPage.isFetching,
	followingInProgress: state.usersPage.followingInProgress
})

const mapDispatchToProps = dispatch => ({
	follow: (userId) => dispatch(follow(userId)),
	unfollow: (userId) => dispatch(unfollow(userId)),
	setUsers: (users) => dispatch(setUsers(users)),
	setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
	setUsersNumber: (usersNumber) => dispatch(setUsersNumber(usersNumber)),
	toggleFetching: (isFetching) => dispatch(toggleFetching(isFetching)),
	toggleFollowingProgress: (isFetching, userId) => dispatch(toggleFollowingProgress(isFetching, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);