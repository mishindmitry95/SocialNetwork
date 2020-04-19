import { connect } from "react-redux";
import {follow, setCurrentPage, setUsers, setUsersNumber, unfollow} from "../../actions/actions";
import { Users } from "../../components/Users/Users";

const mapStateToProps = state => ({
	users: state.usersPage.users,
	count: state.usersPage.count,
	currentPage: state.usersPage.currentPage,
	usersNumber: state.usersPage.usersNumber
})

const mapDispatchToProps = dispatch => ({
	follow: (userId) => dispatch(follow(userId)),
	unfollow: (userId) => dispatch(unfollow(userId)),
	setUsers: (users) => dispatch(setUsers(users)),
	setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
	setUsersNumber: (usersNumber) => dispatch(setUsersNumber(usersNumber))
})


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;