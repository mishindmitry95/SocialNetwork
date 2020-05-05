import React from "react";
import Header from "../../components/Header/Header";
import { setAuthUserData } from "../../actions/actions";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
            />
        );
    }
}

const mapStateToProps = state => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode !== 0) return null;
            dispatch(setAuthUserData(data.data));
        })
        .catch(e => console.error(e));
}

export default connect(mapStateToProps,{ getAuthUserData })(HeaderContainer);