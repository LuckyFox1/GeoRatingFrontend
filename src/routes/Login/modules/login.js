import * as actionTypes from '../constants/actionTypes'

const ACTION_HANDLERS = {
  [actionTypes.SET_USER]: (state, action) => {
    return {
      ...state,
      user: action.payload.user
    }
  }
}

const initialState = {
  user: {}
}
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
