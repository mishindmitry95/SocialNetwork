import React from "react";
import { connect } from "react-redux";
import Profile from "../../components/Profile/Profile";
import { withRouter } from "react-router-dom";
import Preloader from "../../components/UI/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../redux/reducers/withAuthRedirect";
import {
	getUserProfile,
	getUserStatus,
	savePhoto,
	saveProfile,
	updateUserStatus
} from "../../redux/reducers/profilePageReducer";
import {
	getAuthorizedUserId,
	getIsFetching,
	getProfile,
	getStatusSelector
} from "../../redux/selectors/profile-selectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId ) {
			this.refreshProfile();
		}
	}

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId ? this.props.authorizedUserId : this.props.history.push("/login");
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

    render() {
        return (
          <>
              {
                  this.props.isFetching ? <Preloader /> : <Profile {...this.props}  isOwner={!this.props.match.params.userId}/>
              }
          </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    isFetching: getIsFetching(state),
	status: getStatusSelector(state),
	authorizedUserId: getAuthorizedUserId(state)
})

export default compose(
    connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)