import { connect } from "react-redux";
import Dialogs from "../../components/Dialogs/Dialogs";
import { compose } from "redux";
import { withAuthRedirect } from "../../reducers/withAuthRedirect";
import { sendMessage } from "../../actions/actions";

const mapStateToProps = state => ({
	dialogs: state.dialogsPage.dialogs,
	messages: state.dialogsPage.messages,
})

const mapDispatchToProps = dispatch => ({
	sendMessage: text => dispatch(sendMessage(text)),
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
