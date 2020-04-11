import React from "react";
import Classes from './Post.module.css'

const Post = (props) => {
	return (
		<div className={Classes.item}>
			<img src={props.avatar} alt="user avatar"/>
			{props.text}
			<div>
				<span>Likes: {props.likes}</span>
			</div>
		</div>
	);
}

export default Post;