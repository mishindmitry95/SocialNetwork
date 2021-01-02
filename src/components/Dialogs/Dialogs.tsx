import React from 'react';
import Styles from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList';
import MessagesList from './MessagesList/MessagesList';
import {DialogType, MessageType} from '../../types/types';

type OwnPropsType = {
	dialogs: Array<DialogType> | [],
	messages: Array<MessageType> | [],
	sendMessage: (text: string) => void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
	return (
		<div className={Styles.ContentContainer}>
			<DialogsList
				dialogs={props.dialogs}
			/>
			<MessagesList
				messages={props.messages}
				onSendMessage={props.sendMessage}
			/>
		</div>
	);
};

export default Dialogs;