import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setUsersNumber, toggleFetching, unfollow } from "../../actions/actions";
import { Users } from "../../components/Users/Users";

class UsersContainer extends React.Component {
	constructor(props) {
		super(props);
		this.userUrl = 'https://social-network.samuraijs.com/api/1.0/users';
	}
	componentDidMount() {
		this.fetchUsers(this.props.currentPage);
	}

	fetchUsers = async (page) => {
		try {
			const response = await fetch(`${this.userUrl}?page=${page}&count=${this.props.count}`,
				{method: 'GET'});
			const getData = response.json();

			getData.then(data => {
				this.props.setUsers(data.items);
				this.props.setUsersNumber(data.totalCount)
				this.props.toggleFetching(false);
			})
		} catch (e) {
			console.error(e);
		}
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
				getNewUsers={this.fetchUsers}
				toggleFetching={this.props.toggleFetching}
				setCurrentPage={this.props.setCurrentPage}
			/>
		);
	}
}

const mapStateToProps = state => ({
	users: state.usersPage.users,
	count: state.usersPage.count,
	currentPage: state.usersPage.currentPage,
	usersNumber: state.usersPage.usersNumber,
	isFetching: state.usersPage.isFetching
})

const mapDispatchToProps = dispatch => ({
	follow: (userId) => dispatch(follow(userId)),
	unfollow: (userId) => dispatch(unfollow(userId)),
	setUsers: (users) => dispatch(setUsers(users)),
	setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
	setUsersNumber: (usersNumber) => dispatch(setUsersNumber(usersNumber)),
	toggleFetching: (isFetching) => dispatch(toggleFetching(isFetching))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);