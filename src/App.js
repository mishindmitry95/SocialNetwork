import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./containers/DialogsContainer/DialogsContainer";
import UsersContainer from "./containers/UsersContainer/UsersContainer";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<div className="main-content fixed-container">
				<div className="sidebar">
					<Navbar/>
				</div>
				<div className="page_body">
					<Route path="/profile" component={ Profile } />
					<Route path="/dialogs" component={ DialogsContainer } />
					<Route path="/users" component={ UsersContainer } />
				</div>
			</div>
		</div>
	);
}

export default App;
