import * as actionTypes from '../constants/actionTypes'

const ACTION_HANDLERS = {
  [actionTypes.SET_METCASTS_TO_ADMIN]: (state, action) => {
    return {
      ...state,
      metcasts: action.payload.metcasts
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
