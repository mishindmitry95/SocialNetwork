import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {createStore, applyMiddleware, compose, Action} from 'redux'
import { Provider } from "react-redux";
import { rootReducer, RootReducerType } from './redux/reducers/rootReducer'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));
export type AppStateType = ReturnType<RootReducerType>

export type ActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type CommonThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

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
