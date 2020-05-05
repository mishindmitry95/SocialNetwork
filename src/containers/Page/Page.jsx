import React from "react";
import Styles from './Page.module.css'

export class Page extends React.Component {
	render() {
		return (
			<div
				onClick={() => this.props.getUsers(this.props.page, this.props.count)}
				className={`${Styles.item} ${this.props.selected ? Styles.selected : ''}`}
			>
				{ this.props.page }
			</div>
		);
	}
}