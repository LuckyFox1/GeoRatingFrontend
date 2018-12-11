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
  },
  [actionTypes.IS_LOGGED_IN]: (state, action) => {
    return {
      ...state,
      loggedIn: action.payload.loggedIn
    }
  },
  [actionTypes.SET_USER]: (state, action) => {
    return {
      ...state,
      user: action.payload.user
    }
  },
  [actionTypes.SHOW_LOGIN_FORM]: (state, action) => {
    return {
      ...state,
      showLoginForm: action.payload.show
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loggedIn: false,
  user: {},
  showLoginForm: false,
  metcasts: []
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
