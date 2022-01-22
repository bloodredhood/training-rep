import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer"
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
  usersPage: usersReducer,
	auth: authReducer,
  app: appReducer,
  form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store

export default store