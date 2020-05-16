import React from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { logout } from "../../reducers/authReducer";

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
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{ logout })(HeaderContainer);