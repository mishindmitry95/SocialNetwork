import React from "react";
import { connect } from "react-redux";
import { toggleFetching, setUserProfile, getStatus } from "../../actions/actions";
import Profile from "../../components/Profile/Profile";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";
import Preloader from "../../components/UI/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../reducers/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.match.params.userId;
        if (!profileId) {
            profileId = 7295;
        }
        this.props.getUserProfile(profileId);
        this.props.getUserStatus(profileId);
    }

    render() {
        return (
          <>
              {
                  this.props.isFetching ? <Preloader /> : <Profile {...this.props} />
              }
          </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
	status: state.profilePage.status
})

const getUserProfile = (id) => (dispatch) => {
    dispatch(toggleFetching(true));
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
            dispatch(toggleFetching(false));
        })
        .catch(e => console.error(e));
}

const getUserStatus = (id) => (dispatch) => {
	profileAPI.getStatus(id)
		.then(data => {
			dispatch(getStatus(data))
		})
		.catch(e => console.error(e));
}

const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(getStatus(status))
			}
		})
		.catch(e => console.error(e));
}

export default compose(
    connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)