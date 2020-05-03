import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./containers/DialogsContainer/DialogsContainer";
import UsersContainer from "./containers/UsersContainer/UsersContainer";
import ProfileContainer from "./containers/ProfileContainer/ProfileContainer";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<div className="main-content fixed-container">
				<div className="sidebar">
					<Navbar/>
				</div>
				<div className="page_body">
					<Route path="/profile/:userId?" component={ ProfileContainer } />
					<Route path="/dialogs" component={ DialogsContainer } />
					<Route path="/users" component={ UsersContainer } />
				</div>
			</div>
		</div>
	);
}

export default App;
