import * as actionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setMetcasts = createAction(actionTypes.SET_METCASTS)
export const getMetcasts = createAction(actionTypes.GET_METCASTS, metcasts => metcasts)
export const isLoggedIn = createAction(actionTypes.IS_LOGGED_IN, loggedIn => ({ loggedIn }))
export const loginUser = createAction(actionTypes.LOGIN_USER, (name, password) => ({ name, password }))
export const registerUser = createAction(actionTypes.REGISTER_USER, (name, password) => ({ name, password }))
export const setUser = createAction(actionTypes.SET_USER, user => ({ user }))
export const showLogInForm = createAction(actionTypes.SHOW_LOGIN_FORM, show => ({ show }))
export const signOut = createAction(actionTypes.SIGN_OUT)
