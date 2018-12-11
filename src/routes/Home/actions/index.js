import * as actionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setMetcasts = createAction(actionTypes.SET_METCASTS)
export const getMetcasts = createAction(actionTypes.GET_METCASTS, metcasts => metcasts)
