import React from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { logout } from "../../redux/reducers/authReducer";
import { getIsAuth, getLogin } from "../../redux/selectors/header-selectors";

class HeaderContainer extends React.Component {
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

const mapStateToProps = state => ({
    login: getLogin(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps,{ logout })(HeaderContainer);