import React from "react";
import Styles from './Page.module.css'

export class Page extends React.Component {
	onClickHandler = (page) => {
		this.props.setCurrentPage(page);
		this.props.getNewUsers(page);
	}

	render() {
		return (
			<div
				onClick={() => this.onClickHandler(this.props.page)}
				className={`${Styles.item} ${this.props.selected ? Styles.selected : ''}`}
			>
				{ this.props.page }
			</div>
		);
	}
}