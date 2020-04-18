import { connect } from "react-redux";
import { follow, unfollow } from "../../actions/actions";
import { Users } from "../../components/Users/Users";

const mapStateToProps = state => ({
	users: state.usersPage.users,
})

const mapDispatchToProps = dispatch => ({
	follow: (userId) => dispatch(follow(userId)),
	unfollow: (userId) => dispatch(unfollow(userId)),
})


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;