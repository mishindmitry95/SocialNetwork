import React from 'react';
import Post from './Post/Post'
import AddPostForm from "../../forms/AddPostForm/AddPostForm";

const MyPosts = React.memo((props) => {
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
	const addPostHandle = (values) => {
		props.addPost(values.postText);
	}

	return (
		<div>
			<h2>My posts</h2>
			<div>
				<AddPostForm onSubmit={addPostHandle}/>
			</div>
			{ postElements }
		</div>
	);
});

export default MyPosts;