import { connect } from "react-redux";
import {sendMessage, updateNewMessageText} from "../../actions/actions";
import Dialogs from "../../components/Dialogs/Dialogs";

const mapStateToProps = state => ({
	dialogs: state.dialogsPage.dialogs,
	messages: state.dialogsPage.messages,
	newMessageText: state.dialogsPage.newMessageText
})

const mapDispatchToProps = dispatch => ({
	sendMessage: text => dispatch(sendMessage(text)),
	updateNewMessageText: text => dispatch(updateNewMessageText(text))
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
