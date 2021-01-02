import React from 'react';
import {connect} from 'react-redux';
import Profile from '../../components/Profile/Profile';
import {withRouter} from 'react-router-dom';
import Preloader from '../../components/UI/Preloader/Preloader';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {
	getUserProfile,
	getUserStatus,
	savePhoto,
	saveProfile,
	updateUserStatus
} from '../../redux/reducers/profilePageReducer';
import {
	getAuthorizedUserId,
	getIsFetching,
	getProfile,
	getStatusSelector
} from '../../redux/selectors/profile-selectors';
import {AppStateType} from '../../index';
import {RouteComponentProps} from 'react-router';
import {ProfileType} from '../../types/types';

type PathParamsType = {
	userId: string
};

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
	getUserProfile: (id: number | null) => void
	updateUserStatus: (status: string) => void
	getUserStatus: (id: number | null) => void
	savePhoto: (file: File) => void
	saveProfile: (formData: ProfileType) => Promise<any>
};

type CommonPropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<CommonPropsType> {
	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps: CommonPropsType, prevState: CommonPropsType) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	refreshProfile() {
		let userId: number | null = +this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login');
			}
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

	render() {
		return (
			<>
				{
					this.props.isFetching
						? <Preloader/>
						: <Profile
							profile={this.props.profile}
							updateStatus={this.props.updateUserStatus}
							status={this.props.status}
							savePhoto={this.props.savePhoto}
							saveProfile={this.props.saveProfile}
							isOwner={!this.props.match.params.userId}
						/>
				}
			</>
		);
	}
}

const mapStateToProps = (state: AppStateType) => ({
	profile: getProfile(state),
	isFetching: getIsFetching(state),
	status: getStatusSelector(state),
	authorizedUserId: getAuthorizedUserId(state)
});

export default compose<React.ComponentType>(
	connect(mapStateToProps, {getUserProfile, updateUserStatus, getUserStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);