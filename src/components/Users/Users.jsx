import React from "react";
import {User} from "./User/User";
import Button from "../UI/Button";
import Styles from './Users.module.css'
import * as axios from 'axios';
import {Page} from "../../containers/Page/Page";

export class Users extends React.Component {
	constructor(props) {
		super(props);
		this.userUrl = 'https://social-network.samuraijs.com/api/1.0/users';
	}
	componentDidMount() {
		this.axiosGetUsers(this.props.currentPage);
	}

	axiosGetUsers = (page) => {
		axios.get(`${this.userUrl}?page=${page}&count=${this.props.count}`)
			.then((response) => {
				this.props.setUsers(response.data.items);
				this.props.setUsersNumber(response.data.totalCount)
			})
			.catch((error) => console.error(error));
	}

	get users() {
		const { props } = this;
		if (props.users.length) {
			return props.users.map(user => {
				return (
					<User
						id={user.id}
						name={user.name}
						status={user.status}
						photo={user.photos.small}
						followed={user.followed}
						key={user.id}
						follow={props.follow}
						unfollow={props.unfollow}
					/>
				);
			})
		}
		return [];
	}

	get pages() {
		// const pagesCount = Math.ceil((this.props.usersNumber / this.props.count));
		let pagesArray = [];
		//TODO т.к страниц 3000, пока ограничим 5, потом сделать нормально
		for ( let i=1; i <= 5; i++ ) {
			pagesArray.push(i);
		}
		return pagesArray.map(page => {
			return (
				<Page
					key={page}
					page={page}
					setCurrentPage={this.props.setCurrentPage}
					getNewUsers={this.axiosGetUsers}
					selected={ page === this.props.currentPage }
				/>
			)
		});
	}

	render() {

		return (
			<div className={Styles.usersContainer}>
				<div className={Styles.PagesContainer}>
					{ this.pages }
				</div>
				<div>
					{ this.users }
				</div>
				<div className={Styles.buttonContainer}>
					<Button
						caption='Show more'
						theme='info'
					/>
				</div>
			</div>
		);
	}
}