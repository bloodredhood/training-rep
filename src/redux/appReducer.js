const ADD_POST = "ADD_POST"

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

const initialState = {
  posts: [],
  profile: null,
  status: ""
}

const appReducer = (state = initialState, action) => {
  //console.log(action)
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
    }
    default:
      return state
  }
}

export const saveProfile = profile => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
}

export default appReducer