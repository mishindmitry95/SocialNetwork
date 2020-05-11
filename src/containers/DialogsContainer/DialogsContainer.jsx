import { connect } from "react-redux";
import Dialogs from "../../components/Dialogs/Dialogs";
import { compose } from "redux";
import { withAuthRedirect } from "../../reducers/withAuthRedirect";
import { sendMessage } from "../../reducers/dialogsPageReducer";

const mapStateToProps = state => ({
	dialogs: state.dialogsPage.dialogs,
	messages: state.dialogsPage.messages,
})

export default compose(
	connect(mapStateToProps, { sendMessage }),
	withAuthRedirect
)(Dialogs);
