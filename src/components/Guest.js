import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Guest = (props) => {
  const {guestIdx} = useParams()
  const [guest, setGuest] = useState([])
  return (
    <>
    haha link
    </>
  )
}

export default Guest