import Button from "../../components/UI/Button";
import React from "react";

const AddPost = (props) => {
	const textRef = React.createRef();
	return (
		<div>
			<textarea
				className="textarea"
				ref={textRef}
			/>
			<Button
				caption='Добавить пост'
				theme='default'
				onClick={() => {
					props.onAddPost(textRef.current.value)
					textRef.current.value = '';
				}}
			/>
		</div>
	);
}

export default AddPost;