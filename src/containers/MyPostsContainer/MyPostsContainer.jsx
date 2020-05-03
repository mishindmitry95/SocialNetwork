import { connect } from "react-redux";
import {addPost, updateNewPostText} from "../../actions/actions";
import MyPosts from "../../components/Profile/MyPosts/MyPosts";

const mapStateToProps = state => ({
	posts: state.profilePage.posts,
	newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = dispatch => ({
	addPost: text => dispatch(addPost(text)),
	updateNewPostText: text => dispatch(updateNewPostText(text))
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
