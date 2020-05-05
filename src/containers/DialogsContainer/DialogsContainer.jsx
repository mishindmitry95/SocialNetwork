import { connect } from "react-redux";
import { sendMessage, updateNewMessageText } from "../../actions/actions";
import Dialogs from "../../components/Dialogs/Dialogs";
import { compose } from "redux";
import { withAuthRedirect } from "../../reducers/withAuthRedirect";

const mapStateToProps = state => ({
	dialogs: state.dialogsPage.dialogs,
	messages: state.dialogsPage.messages,
	newMessageText: state.dialogsPage.newMessageText
})

const mapDispatchToProps = dispatch => ({
	sendMessage: text => dispatch(sendMessage(text)),
	updateNewMessageText: text => dispatch(updateNewMessageText(text))
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
