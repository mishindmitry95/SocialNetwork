import React from "react";
import Styles from './Page.module.css'
import {userAPI} from "../../api/api";

export class Page extends React.Component {
	getNewUsers = (page, count) => {
		userAPI.getUsers(page, count)
			.then(data => {
				this.props.setUsers(data.items);
				this.props.setUsersNumber(data.totalCount)
				this.props.toggleFetching(false);
			}).catch(e => console.error(e));
	}

	onClickHandler = (page, count) => {
		this.props.toggleFetching(true);
		this.props.setCurrentPage(page);
		this.getNewUsers(page, count);
	}

	render() {
		return (
			<div
				onClick={() => this.onClickHandler(this.props.page, this.props.count)}
				className={`${Styles.item} ${this.props.selected ? Styles.selected : ''}`}
			>
				{ this.props.page }
			</div>
		);
	}
}