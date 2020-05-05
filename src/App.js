import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./containers/DialogsContainer/DialogsContainer";
import UsersContainer from "./containers/UsersContainer/UsersContainer";
import ProfileContainer from "./containers/ProfileContainer/ProfileContainer";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<div className='main-content fixed-container'>
				<div className='sidebar'>
					<Navbar/>
				</div>
				<div className='page_body'>
					<Route path='/profile/:userId?' component={ ProfileContainer } />
					<Route path='/dialogs' component={ DialogsContainer } />
					<Route path='/users' component={ UsersContainer } />
					<Route path='/login' component={ Login } />
				</div>
			</div>
		</div>
	);
}

export default App;
