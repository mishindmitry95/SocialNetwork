import React from "react";
import Header from "../../components/Header/Header";
import { setUserData } from "../../actions/actions";
import { connect } from "react-redux";
import { userAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        userAPI.getUserData()
            .then(data => {
                if (data.resultCode !== 0) return null;
                return this.props.setUserData(data.data);
            })
            .catch(e => console.error(e));
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

export default connect(mapStateToProps,{setUserData})(HeaderContainer);