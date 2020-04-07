import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<div className="main-content fixed-container flex-container">
					<Navbar />
					<Route path="/profile" component={Profile} />
					<Route path="/messages" component={Dialogs} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
