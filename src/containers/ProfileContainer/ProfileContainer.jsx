import React from "react";
import {connect} from "react-redux";
import {setUserProfile, toggleFetching} from "../../actions/actions";
import Profile from "../../components/Profile/Profile";
import {withRouter} from "react-router-dom";
import Preloader from "../../components/UI/Preloader/Preloader";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.profileUrl = 'https://social-network.samuraijs.com/api/1.0/profile';
        this.profileId = this.props.match.params.userId || null;
    }

    componentDidMount() {
        this.fetchProfile(this.profileId);
    }

    fetchProfile = async (profileId) => {
        try {
            const response = await fetch(`${this.profileUrl}/${profileId}`,
                {method: 'GET'});
            const getData = response.json();

            getData.then(data => {
                this.props.setUserProfile(data)
                this.props.toggleFetching(false);
            })
        } catch (e) {
            console.error(e);
        }
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