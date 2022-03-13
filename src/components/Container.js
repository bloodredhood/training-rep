import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Container = () => {

  const [guests, setGuests] = useState([])
  const [diet, setDiet] = useState([])
  const [state, setState] = useState([])

  const fetchAndSaveGuests = async () => {
    const response = await fetch("https://gp-js-test.herokuapp.com/pizza/guests")
    const data = await response.json()
    setGuests(data.party)
  }

  const fetchAndSaveDiet = async (guests) => {
    if (guests.length !== 0) {
      const queryStr = guests.map(guest => guest.name).join(",").split(" ").join("%20")
      const response = await fetch(`https://gp-js-test.herokuapp.com/pizza/world-diets-book/${queryStr}`)
      const data = await response.json()
      setDiet(data.diet)
    }
  }

  const getCommonStateFunc = (arr, arr1) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
      arr2.push({
        name: arr[i].name,
        eatsPizza: arr[i].eatsPizza,
        isVegan: arr1[i].isVegan,
        isPaid: false
      })
    }
    return arr2
  }

  //map(guest => guest.name).join(",").split(" ").join("%20") к мапу массива имен
  useEffect(() => {
    if (guests.length === 0) {
      setTimeout(() => {
        fetchAndSaveGuests()
      }, 1500);
    }
  }, [guests])

  return (
    <>
      {
        guests.length === 0
          ? "LOADING"
          : diet.length === 0
            ? <button onClick={() => { fetchAndSaveDiet(guests) }}>check diet</button>
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