import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Guest = (props) => {
  const {user_name} = useParams()
  const [guest, setGuest] = useState([])
  return (
    <>
    haha link
    </>
  )
}

export default Guest