import * as actionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setMetcasts = createAction(actionTypes.SET_METCASTS)
export const getMetcasts = createAction(actionTypes.GET_METCASTS, metcasts => metcasts)
export const loginUser = createAction(actionTypes.LOGIN_USER, (name, password) => ({ name, password }))
export const registerUser = createAction(actionTypes.REGISTER_USER, (name, password) => ({ name, password }))
export const setUser = createAction(actionTypes.SET_USER, user => ({ user }))
export const showLogInForm = createAction(actionTypes.SHOW_LOGIN_FORM, show => ({ show }))
export const signOut = createAction(actionTypes.SIGN_OUT)
export const setLike = createAction(actionTypes.SET_LIKE, (like, newRating) => ({ like, newRating }))
export const vote = createAction(actionTypes.VOTE, (rating, metcastID) => ({ rating, metcastID }))
export const removeLike = createAction(actionTypes.REMOVE_LIKE, (metcastID, newRating) => ({ metcastID, newRating }))
export const removeVote = createAction(actionTypes.REMOVE_VOTE, (metcastID) => ({ metcastID }))
