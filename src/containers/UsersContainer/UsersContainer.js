import React from "react";
import { connect } from "react-redux";
import { Users } from "../../components/Users/Users";
import Preloader from "../../components/UI/Preloader/Preloader";
import { followUnfollow, getUsers } from "../../reducers/usersPageReducer";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.count);
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
				followUnfollow={this.props.followUnfollow}
				isFetching={this.props.isFetching}
				pages={this.pages}
				toggleFetching={this.props.toggleFetching}
				setCurrentPage={this.props.setCurrentPage}
				setUsers={this.props.setUsers}
				setUsersNumber={this.props.setUsersNumber}
				followingInProgress={this.props.followingInProgress}
				toggleFollowingProgress={this.props.toggleFollowingProgress}
				getUsers={this.props.getUsers}
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

export default connect(mapStateToProps, { getUsers, followUnfollow })(UsersContainer);