import { fetchDiet, fetchGuests, getCommonStateFunc } from "../api"

const FETCH_GUESTS = "FETCH_GUESTS"
const FETCH_DIET = "FETCH_DIET"
const GET_COMMON_STATE = "GET_COMMON_STATE"
const PUSH_FORM_TO_STATE = "PUSH_FORM_TO_STATE"

//ACs
export const fetchGuestsAC = (guests) => ({type: FETCH_GUESTS, guests})
export const fetchDietAC = (diet) => ({type: FETCH_DIET, diet})
export const getCommonStateAC = (commonState) => ({type: GET_COMMON_STATE, commonState})
export const pushFormToState = (idx, formInfo) => ({type: PUSH_FORM_TO_STATE, idx, formInfo})

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

// reducer

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
    case PUSH_FORM_TO_STATE: {
      const newArr = [...state.commonState]
      newArr[action.idx].formInfo = action.formInfo
      newArr[action.idx].isSubmitted = true
      return {
        ...state,
        commonState: newArr
      }
    }
    default:
      return state
  }
}



export default appReducer