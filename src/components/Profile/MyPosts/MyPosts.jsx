import React from 'react';
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Добавить пост</button>
			</div>
			<Post />
			<Post />
		</div>
	);
}

export default MyPosts;