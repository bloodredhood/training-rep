import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./../App.css"
import { Rate } from "antd";

//value={props.commonState[guestIdx].formInfo.rating}

const Guest = (props) => {
  const { guestIdx } = useParams()
  console.log(props.commonState[guestIdx])
  return (
    <form className="forma">
      <label>NAME</label>
      <div className="formTextGray">{props.commonState[guestIdx].name}</div>
      <Rate />
      <div>
        <label>PHONE</label>
      </div>
      <input />
      <div>
        <label>COMMENT</label>
      </div>
      <textarea></textarea>
      <div>
        <button className="formButton">SAVE</button>
      </div>
    </form>
  )
}

export default Guest