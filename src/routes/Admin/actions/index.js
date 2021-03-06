import * as actionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setMetcastsToAdmin = createAction(actionTypes.SET_METCASTS_TO_ADMIN)
export const getMetcastsForAdmin = createAction(actionTypes.GET_METCASTS_FOR_ADMIN, metcasts => metcasts)
export const toggleEditForm = createAction(actionTypes.TOGGLE_EDIT_FORM, (metcastID, isEdit) => ({ metcastID, isEdit }))
export const addMetcast = createAction(actionTypes.ADD_METCAST, metcast => ({ metcast }))
export const changeTab = createAction(actionTypes.CHANGE_TAB, tabName => ({ tabName }))
export const setMetcast = createAction(actionTypes.SET_METCAST, metcast => ({ metcast }))
export const changeMetcast = createAction(actionTypes.CHANGE_METCAST, metcast => ({ metcast }))
export const editMetcast = createAction(actionTypes.EDIT_METCAST, (metcast, metcastID) => ({ metcast, metcastID }))
export const removeMetcast = createAction(actionTypes.REMOVE_METCAST, metcastID => ({ metcastID }))
export const remove = createAction(actionTypes.REMOVE, metcastID => ({ metcastID }))
