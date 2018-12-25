import * as actionTypes from '../constants/actionTypes'

const ACTION_HANDLERS = {
  [actionTypes.SET_METCASTS_TO_ADMIN]: (state, action) => {
    return {
      ...state,
      metcasts: action.payload.metcasts
    }
  },
  [actionTypes.TOGGLE_EDIT_FORM]: (state, action) => {
    return {
      ...state,
      metcasts: state.metcasts.map(item => {
        return action.payload.metcastID === item._id ? { ...item, editing: action.payload.isEdit } : { ...item }
      })
    }
  },
  [actionTypes.CHANGE_TAB]: (state, action) => {
    return {
      ...state,
      tab: action.payload.tabName
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  tab: 'metcasts-list'
}
export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
