import React from "react";
import { connect } from "react-redux";
import { setUserProfile, toggleFetching } from "../../actions/actions";
import Profile from "../../components/Profile/Profile";
import { withRouter } from "react-router-dom";
import Preloader from "../../components/UI/Preloader/Preloader";
import { userAPI } from "../../api/api";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.profileId = this.props.match.params.userId || null;
    }

    componentDidMount() {
        userAPI.getProfile(this.profileId)
            .then(data => {
                this.props.setUserProfile(data)
                this.props.toggleFetching(false);
            })
            .catch(e => console.error(e));
    }

    render() {
        return (
          <>
              {this.profileId ? <Profile {...this.props}/> : <Preloader />}
          </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})
const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, toggleFetching })(WithUrlDataContainerComponent);