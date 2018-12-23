import * as actionTypes from '../constants/actionTypes'

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
  },
  [actionTypes.SIGN_OUT]: (state) => {
    return {
      ...state,
      user: null
    }
  }
}

const initialState = {
  loggedIn: false,
  user: null,
  /*user: {
    name: 'admin',
    _id: '5c0eecfae74ec543a446eb1a',
    password: '21232f297a57a5a743894a0e4a801fc3',
    __v: 0,
    likes: []
  },*/
  showLoginForm: false,
  metcasts: []
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
