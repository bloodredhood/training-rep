import React from "react";

const MessagesItem = (props) => {
   return (
    <div className='dialogsMessagesItem' key={props.id}>
      {props.message}
    </div>
   )
}

export default MessagesItem