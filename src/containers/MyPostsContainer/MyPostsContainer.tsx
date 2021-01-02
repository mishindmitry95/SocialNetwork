import {connect} from 'react-redux';
import MyPosts from '../../components/Profile/MyPosts/MyPosts';
import {actions} from '../../redux/reducers/profilePageReducer';
import {getPosts} from '../../redux/selectors/posts-selectors';
import {AppStateType} from '../../index';
import {PostType} from '../../types/types';

type MapPropsType = {
	posts: Array<PostType>
};

type MapDispatchType = {
	addPost: (text: string) => void
};

const mapStateToProps = (state: AppStateType): MapPropsType => ({
	posts: getPosts(state),
});

const MyPostsContainer = connect<MapPropsType, MapDispatchType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPost})(MyPosts);

export default MyPostsContainer;
