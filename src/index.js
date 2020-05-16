import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import { rootReducer } from './redux/reducers/rootReducer'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

window.store = store;

ReactDOM.render(
  <BrowserRouter>
	  <Provider store={store}>
		  <App />
	  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
