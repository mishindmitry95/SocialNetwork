import React from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../reducers/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

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

export default connect(mapStateToProps,{ getAuthUserData, logout })(HeaderContainer);