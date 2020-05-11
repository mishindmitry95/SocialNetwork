import React from "react";
import { connect } from "react-redux";
import Profile from "../../components/Profile/Profile";
import { withRouter } from "react-router-dom";
import Preloader from "../../components/UI/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../reducers/withAuthRedirect";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../reducers/profilePageReducer";

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

export default compose(
    connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)