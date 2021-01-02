import React from "react";
import Styles from './Post.module.css'

type TPostProps = {
	avatar: string,
	text: string,
	likes: number
};

const Post: React.FC<TPostProps> = (props) => {
	return (
		<div className={Styles.item}>
			<img src={props.avatar} alt="user avatar"/>
			{props.text}
			<div>
				<span>Likes: {props.likes}</span>
			</div>
		</div>
	);
};

export default Post;