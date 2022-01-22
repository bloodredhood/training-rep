import React from "react";
import { NavLink } from "react-router-dom"
import "./../Dialogs.css"

const DialogsItem = (props) => {

  return (
    <div className='dialogsItem'>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default DialogsItem