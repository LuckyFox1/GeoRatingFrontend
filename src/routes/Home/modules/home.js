import * as actionTypes from '../constants/actionTypes'

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [actionTypes.SET_METCASTS]: (state, action) => {
    return {
      ...state,
      metcasts: action.payload.metcasts
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  metcasts: []
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
