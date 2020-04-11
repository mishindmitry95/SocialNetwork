import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post'
import Button from "../../UI/Button";

const MyPosts = (props) => {
	let postElements = props.posts.map(p => <Post avatar={p.avatar} text={p.text} likes={p.likes}/>)
	return (
		<div>
			<h2>My posts</h2>
			<div>
				<textarea className={Classes.textareaField}></textarea>
				<Button
					caption='Добавить пост'
					theme='default'
				/>
			</div>
			{ postElements }
		</div>
	);
}

export default MyPosts;