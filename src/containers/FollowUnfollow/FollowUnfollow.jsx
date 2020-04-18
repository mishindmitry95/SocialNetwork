import React from "react";
import Button from "../../components/UI/Button";

export const FollowUnfollow = (props) => {
	return (
		<Button
			caption={props.caption}
			theme={props.theme}
			onClick={() => {
				props.onClick(props.userId);
			}}
		/>
	)
}