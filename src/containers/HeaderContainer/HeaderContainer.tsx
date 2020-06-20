import React from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { logout } from "../../redux/reducers/authReducer";
import { getIsAuth, getLogin } from "../../redux/selectors/header-selectors";
import {AppStateType} from "../../index";

type MapStateTypes = {
	login: string | null
	isAuth: boolean
}
type MapDispatchProps = {
	logout: () => void
}

class HeaderContainer extends React.Component<MapStateTypes & MapDispatchProps> {
	render() {
		return (
			<Header
				login={this.props.login}
				logout={this.props.logout}
				isAuth={this.props.isAuth}
			/>
		);
	}
}

const mapStateToProps = (state: AppStateType): MapStateTypes => ({
	login: getLogin(state),
	isAuth: getIsAuth(state)
})

export default connect<MapStateTypes, MapDispatchProps, {}, AppStateType>(mapStateToProps,{ logout })(HeaderContainer);