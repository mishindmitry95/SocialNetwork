import Button from "../../components/UI/Button/Button";
import React from "react";

const AddPost = (props) => {
	const textRef = React.createRef();
	return (
		<div>
			<textarea
				value={props.newPostText}
				className="textarea"
				ref={textRef}
				onChange={() => {
					props.onUpdateNewPostText(textRef.current.value)
				}}
			/>
			<Button
				caption='Добавить пост'
				theme='default'
				onClick={() => {
					props.onAddPost(textRef.current.value);
					props.onUpdateNewPostText('');
				}}
			/>
		</div>
	);
}

export default AddPost;