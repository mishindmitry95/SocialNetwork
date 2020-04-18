import { connect } from "react-redux";
import { addPost } from "../../actions/actions";
import MyPosts from "../../components/Profile/MyPosts/MyPosts";

const mapStateToProps = state => ({
	posts: state.profilePage.posts,
})

const mapDispatchToProps = dispatch => ({
	addPost: text => dispatch(addPost(text))
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
export default MyPostsContainer;
