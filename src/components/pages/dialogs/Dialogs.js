import React from "react"
import "./Dialogs.css"
import DialogsItem from "./dialogs-items/DialogsItem"
import MessagesItem from "./dialogs-items/MessagesItem"
import AddMessageForm from "./dialogs-items/AddMessageForm"
import { Navigate } from "react-router"

const Dialogs = (props) => {

  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map(d => <DialogsItem id={d.id} key={d.id} name={d.name} />)
  const messageElements = state.messages.map(m => <MessagesItem id={m.id} key={m.id} message={m.message} />)
  
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if(!props.isAuth) return <Navigate to="/login" />

  return (
    <div className='dialogsWrapper'>
      <div className='dialogsItems'>
        {dialogsElements}
      </div>
      <div className='dialogsMessagesWindow'>
        <div>{messageElements}</div>
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

export default Dialogs