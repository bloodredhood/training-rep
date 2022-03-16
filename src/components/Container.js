import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css"

const Container = (props) => {

  useEffect(() => {
    if (props.guests.length === 0) {
      setTimeout(() => {
        props.getAll()
      }, 1500);
    }
    console.log(props)
  }, [props])

//.then(() => {  const commonState = getCommonStateFunc(getState().app.guests, getState().app.diet)  dispatch(getCommonStateAC(commonState))})

  return (
    <>
      {
        props.diet.length === 0
          ? "LOADING"
          : props.commonState.length === 0
            ?<button onClick={() => props.getCommonState(props.guests, props.diet)}> Join State</button>
            : <ul style={{ listStyleType: "none"}}>
            {props.commonState.map((guest, idx) => {
              return guest.isVegan === false
                ? <li key={idx} className="blackLink" ><NavLink to={`/${idx}`}>{guest.name}</NavLink></li>
                : <li key={idx} className="greenLink" ><NavLink to={`/${idx}`}>{guest.name}</NavLink></li>
            })}
          </ul>
      }
    </>
  )
}

export default Container