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
  },
  [actionTypes.SET_LIKE]: (state, action) => {
    console.log(action.payload.like)
    return {
      ...state,
      metcasts: state.metcasts.map(item => {
        if (item._id === action.payload.like.metcast_id) {
          return {
            ...item,
            rating: action.payload.newRating
          }
        }
        return { ...item }
      }),
      user: {
        ...state.user,
        likes: [...state.user.likes, action.payload.like]
      }
    }
  },
  [actionTypes.REMOVE_LIKE]: (state, action) => {
    console.log(action.payload)
    return {
      ...state,
      metcasts: state.metcasts.map(item => {
        return item._id === action.payload.metcastID ? { ...item, rating: action.payload.newRating } : { ...item }
      }),
      user: {
        ...state.user,
        likes: state.user.likes.filter(item => item.metcast_id !== action.payload.metcastID)
      }
    }
  }
}

const initialState = {
  loggedIn: false,
  // user: null,
  user: {
    name: 'admin',
    _id: '5c0eecfae74ec543a446eb1a',
    password: '21232f297a57a5a743894a0e4a801fc3',
    __v: 0,
    roles: ['user', 'admin'],
    likes: [{
      __v: 0,
      isPositive: 5,
      metcast_id: '5c0eece6e74ec543a446eb19',
      user_id: '5c0eecfae74ec543a446eb1a',
      _id: '5c1fc86b74be522998479a7c'
    }]
  },
  showLoginForm: false,
  metcasts: []
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
