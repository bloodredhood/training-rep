import { fetchDiet, fetchGuests, getCommonStateFunc } from "../api"

const FETCH_GUESTS = "FETCH_GUESTS"
const FETCH_DIET = "FETCH_DIET"
const GET_COMMON_STATE = "GET_COMMON_STATE"

//ACs
export const fetchGuestsAC = (guests) => ({type: FETCH_GUESTS, guests})
export const fetchDietAC = (diet) => ({type: FETCH_DIET, diet})
export const getCommonStateAC = (commonState) => ({type: GET_COMMON_STATE, commonState})

//ThunkCs
export const getAll = () => async (dispatch, getState) => {
  const guests = await fetchGuests()
  const prom = dispatch(fetchGuestsAC(guests))
  Promise.all([prom])
  .then(() => {
    const diet = fetchDiet(getState().app.guests)
    dispatch(fetchDietAC(diet))
  })
  .then(() => {
    const commonState = getCommonStateFunc(getState().app.guests, getState().app.diet)
    dispatch(getCommonStateAC(commonState))
  })
}

//const promise = dispatch(getAuthUserData())
//Promise.all([promise]).then(() => {dispatch(initializedSuccess())})
//need to apply middleware thunk

const initialState = {
  guests: [],
  diet: [],
  commonState: [],
  isLoad: false
}

const appReducer = (state = initialState, action) => {
  //console.log(action)
  switch (action.type) {
    case FETCH_GUESTS: {
      return {
        ...state, guests: action.guests
      }
    }
    case FETCH_DIET: {
      return {
        ...state, diet: action.diet
      }
    }
    case GET_COMMON_STATE: {
      return {
        ...state,
        commonState: action.commonState,
        isLoad: true
      }
    }
    default:
      return state
  }
}



export default appReducer