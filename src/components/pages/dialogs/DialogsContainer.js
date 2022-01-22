import "./Dialogs.css"
import { sendMessage } from "../../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"
import { compose } from "redux"


const mapStateToProps = (state) => ({
  dialogsPage: {...state.dialogsPage},
})


export default compose(

  connect(mapStateToProps, {sendMessage}),

  withAuthRedirect,

)(Dialogs)