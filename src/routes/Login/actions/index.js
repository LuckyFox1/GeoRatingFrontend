import * as actionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const loginUser = createAction(actionTypes.LOGIN_USER, (name, password) => ({ name, password }))
export const registerUser = createAction(actionTypes.REGISTER_USER, (name, password) => ({ name, password }))
export const setUser = createAction(actionTypes.SET_USER, user => ({ user }))
