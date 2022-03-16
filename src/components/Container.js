import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchDiet, fetchGuests } from "../api";

const Container = (props) => {


  //map(guest => guest.name).join(",").split(" ").join("%20") к мапу массива имен
  useEffect(() => {
    if (guests.length === 0) {
      setTimeout(() => {
        fetchGuests()
      }, 1500);
    }
  }, [guests])

  return (
    <>
      {
        guests.length === 0
          ? "LOADING"
          : diet.length === 0
            ? <button onClick={() => { fetchDiet(guests) }}>check diet</button>
            : state.length === 0
              ? <button onClick={() => { setState(getCommonStateFunc(guests, diet)) }}>merge state</button>
              : <ul style={{ listStyleType: "none" }}>
                {state.map((guest, idx) => {
                  return guest.isVegan === false
                  ? <li key={idx} ><NavLink to={`/${idx}`}>{guest.name}</NavLink></li>
                  : <li key={idx} style={{color: "limegreen"}} ><NavLink to={`/${idx}`}>{guest.name}</NavLink></li>
                })}
              </ul>
      }
    </>
  )
}

export default Container