import { connect } from "react-redux";
import Dialogs from "../../components/Dialogs/Dialogs";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {actions} from "../../redux/reducers/dialogsPageReducer";
import { getDialogs, getMessages } from "../../redux/selectors/dialogs-selectors";
import { AppStateType } from "../../index";
import React from "react";

const mapStateToProps = (state: AppStateType) => ({
	dialogs: getDialogs(state),
	messages: getMessages(state),
})

export default compose<React.ComponentType>(
	connect(mapStateToProps, { sendMessage: actions.sendMessage }),
	withAuthRedirect
)(Dialogs);
