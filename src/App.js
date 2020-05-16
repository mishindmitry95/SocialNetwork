import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./containers/DialogsContainer/DialogsContainer";
import UsersContainer from "./containers/UsersContainer/UsersContainer";
import ProfileContainer from "./containers/ProfileContainer/ProfileContainer";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initialize } from "./reducers/appReducer";
import Preloader from "./components/UI/Preloader/Preloader";

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
						<Route path='/dialogs' component={ DialogsContainer }/>
						<Route path='/users' component={ UsersContainer }/>
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
