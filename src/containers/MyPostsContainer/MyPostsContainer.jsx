import { connect } from "react-redux";
import MyPosts from "../../components/Profile/MyPosts/MyPosts";
import { addPost } from "../../redux/reducers/profilePageReducer";
import { getPosts } from "../../redux/selectors/posts-selectors";

const mapStateToProps = state => ({
	posts: getPosts(state),
})

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
