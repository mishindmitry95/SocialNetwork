import { connect } from "react-redux";
import MyPosts from "../../components/Profile/MyPosts/MyPosts";
import { addPost } from "../../reducers/profilePageReducer";

const mapStateToProps = state => ({
	posts: state.profilePage.posts,
})

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
