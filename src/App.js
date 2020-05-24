import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./containers/ProfileContainer/ProfileContainer";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initialize } from "./redux/reducers/appReducer";
import Preloader from "./components/UI/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./containers/DialogsContainer/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./containers/UsersContainer/UsersContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.initialize();
	}

	render() {
		if (!this.props.isInitialized) {
			return <Preloader />
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<div className='main-content fixed-container'>
					<div className='sidebar'>
						<Navbar/>
					</div>
					<div className='page_body'>
						<Route exact path='/' render={ () => <Redirect to={ "/profile" } /> } />
						<Route path='/profile/:userId?' component={ ProfileContainer }/>
						<Route path='/dialogs' component={ withSuspense(DialogsContainer) }/>
						<Route path='/users' component={ withSuspense(UsersContainer) }/>
						<Route path='/login' component={ Login }/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isInitialized: state.app.isInitialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initialize })
)(App);
