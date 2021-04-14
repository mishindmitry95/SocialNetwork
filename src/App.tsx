import React from 'react';
import {Route, withRouter, Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './containers/ProfileContainer/ProfileContainer';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import Login from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initialize} from './redux/reducers/appReducer';
import Preloader from './components/UI/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';
import {AppStateType} from './index';

const DialogsContainer = React.lazy(() => import('./containers/DialogsContainer/DialogsContainer'));
const UsersPage = React.lazy(() => import('./containers/UsersPage/UsersPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
	initialize: () => void;
};

const SuspendedUsers = withSuspense(UsersPage);
const SuspendedDialogs = withSuspense(DialogsContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {
	componentDidMount() {
		this.props.initialize();
	}

	render() {
		if (!this.props.isInitialized) {
			return <Preloader/>;
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<div className='main-content fixed-container'>
					<div className='sidebar'>
						<Navbar/>
					</div>
					<div className='page_body'>
						<Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
						<Route path='/profile/:userId?' component={ProfileContainer}/>
						<Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
						<Route path='/users' render={() => <SuspendedUsers/>}/>
						<Route path='/login' component={Login}/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: AppStateType) => ({
	isInitialized: state.app.isInitialized
});

export default compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, {initialize})
)(App);
