import { connect } from "react-redux";
import Dialogs from "../../components/Dialogs/Dialogs";
import { compose } from "redux";
import { withAuthRedirect } from "../../redux/reducers/withAuthRedirect";
import { sendMessage } from "../../redux/reducers/dialogsPageReducer";
import { getDialogs, getMessages } from "../../redux/selectors/dialogs-selectors";

const mapStateToProps = state => ({
	dialogs: getDialogs(state),
	messages: getMessages(state),
})

export default compose(
	connect(mapStateToProps, { sendMessage }),
	withAuthRedirect
)(Dialogs);
