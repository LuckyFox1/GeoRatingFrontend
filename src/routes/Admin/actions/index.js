import * as actionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setMetcastsToAdmin = createAction(actionTypes.SET_METCASTS_TO_ADMIN)
export const getMetcastsForAdmin = createAction(actionTypes.GET_METCASTS_FOR_ADMIN, metcasts => metcasts)
