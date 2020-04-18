import { connect } from "react-redux";
import { sendMessage } from "../../actions/actions";
import Dialogs from "../../components/Dialogs/Dialogs";

const mapStateToProps = state => ({
	dialogs: state.dialogsPage.dialogs,
	messages: state.dialogsPage.messages,
})

const mapDispatchToProps = dispatch => ({
	sendMessage: text => dispatch(sendMessage(text))
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
