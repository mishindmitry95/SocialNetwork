import React from 'react';
import Post from './Post/Post'
import AddPost from "../../../containers/AddPost/AddPost";

const MyPosts = (props) => {
	const postElements = props.posts.map(p => {
		return (
			<Post
				avatar={ p.avatar }
				text= {p.text }
				likes={ p.likes }
				key={ p.id }
			/>
		);
	})

	return (
		<div>
			<h2>My posts</h2>
			<div>
				<AddPost
					onAddPost={props.addPost}
					onUpdateNewPostText={props.updateNewPostText}
					newPostText={props.newPostText}
				/>
			</div>
			{ postElements }
		</div>
	);
}

export default MyPosts;