import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<div className="main-content fixed-container">
					<div className="sidebar">
						<Navbar />
					</div>
					<div className="page_body">
						<Route path="/profile" render={ () => <Profile posts={ props.posts } /> } />
						<Route path="/dialogs" render={ () => <Dialogs dialogs={ props.dialogs } /> } />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
