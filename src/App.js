import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./containers/DialogsContainer/DialogsContainer";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<div className="main-content fixed-container">
				<div className="sidebar">
					<Navbar/>
				</div>
				<div className="page_body">
					<Route path="/profile" render={ () => <Profile /> }/>
					<Route path="/dialogs" render={ () => <DialogsContainer /> }/>
				</div>
			</div>
		</div>
	);
}

export default App;
