import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
	{
		avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fuser-avatar-flat-icons%2F512%2FUser_Avatar-04-512.png&f=1&nofb=1',
		text: 'It was a good journey!',
		likes: 12
	},
	{
		avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fuser-avatar-flat-icons%2F512%2FUser_Avatar-21-512.png&f=1&nofb=1',
		text: 'Today is a good day',
		likes: 5
	}
];

let dialogs = [
	{
		id: 1,
		name: 'Oleg',
		messages: ['hello', 'how are u?', 'fine']
	},
	{
		id: 2,
		name: 'Pavel',
		messages: ['hi', 'you so pretty']
	},
	{
		id: 3,
		name: 'Dmitry',
		messages: ['bye']
	},
	{
		id: 4,
		name: 'Ksenia',
		messages: ['i miss you', 'and you?', 'good']
	},
	{
		id: 5,
		name: 'Fedor',
		messages: ['school', 'test', 'test']
	}
]

ReactDOM.render(
  <React.StrictMode>
    <App
		posts={ posts }
		dialogs={ dialogs }
	/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
