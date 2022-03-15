export const fetchGuests = async () => {
  const response = await fetch("https://gp-js-test.herokuapp.com/pizza/guests")
  const data = await response.json()
  return data.party
}

export const fetchDiet = async (guests) => {
  if (guests.length !== 0) {
    const queryStr = guests.map(guest => guest.name).join(",").split(" ").join("%20")
    const response = await fetch(`https://gp-js-test.herokuapp.com/pizza/world-diets-book/${queryStr}`)
    const data = await response.json()
    return data.diet
  }
}


export const getCommonStateFunc = (arr, arr1) => {
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