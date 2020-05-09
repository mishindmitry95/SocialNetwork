import React from "react";
import Styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			status: this.props.status
		}
		this.toggleEditMode = this.toggleEditMode.bind(this);
		this.updateStatus = this.updateStatus.bind(this);
	}

componentDidUpdate(prevProps, prevState, snapshot) {
	if (prevProps.status !== this.props.status) {
		this.updateStatus(this.props.status);
	}
}

	toggleEditMode() {
		this.setState({
			editMode: !this.state.editMode
		})
	}

	updateStatus(value) {
		this.setState({
			status: value
		})
	}

	render() {
		return (
			<>
				{
					this.state.editMode
						? <input
							className={Styles.input}
							onBlur={() => {
								this.toggleEditMode();
								this.props.updateStatus(this.state.status)}
							}
							autoFocus
							onChange={e => this.updateStatus(e.currentTarget.value)}
							value={this.state.status}
							/>
						: <div
							onClick={this.toggleEditMode}
							> {this.state.status}</div>
				}
			</>
		);
	}
}

export default ProfileStatus;