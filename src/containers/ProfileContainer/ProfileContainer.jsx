import React from "react";
import { connect } from "react-redux";
import { toggleFetching,setUserProfile } from "../../actions/actions";
import Profile from "../../components/Profile/Profile";
import { withRouter } from "react-router-dom";
import { userAPI } from "../../api/api";
import Preloader from "../../components/UI/Preloader/Preloader";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.match.params.userId;
        if (!profileId) {
            profileId = 2;
        }
        this.props.getUserProfile(profileId);
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
    isFetching: state.profilePage.isFetching
})

const getUserProfile = (id) => (dispatch) => {
    dispatch(toggleFetching(true));
    userAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
            dispatch(toggleFetching(false));
        })
        .catch(e => console.error(e));
}
const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);