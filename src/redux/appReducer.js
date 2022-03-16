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
  dispatch(fetchGuestsAC(guests))
  const setDiet = async(arr) => {
    if (getState().app.guests === 0) {
      setDiet(arr)
    } else {
      const diet = await fetchDiet(arr)
      dispatch(fetchDietAC(diet))
    }
  }
  setDiet(getState().app.guests)
}

export const getCommonState = (guests, diet) => async (dispatch) => {
  const commonState = getCommonStateFunc(guests, diet)
  dispatch(getCommonStateAC(commonState))
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