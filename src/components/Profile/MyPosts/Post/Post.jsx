import React from "react";
import Styles from './Post.module.css'

const Post = (props) => {
	return (
		<div className={Styles.item}>
			<img src={props.avatar} alt="user avatar"/>
			{props.text}
			<div>
				<span>Likes: {props.likes}</span>
			</div>
		</div>
	);
}

export default Post;