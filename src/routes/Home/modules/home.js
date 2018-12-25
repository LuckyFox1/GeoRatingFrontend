import * as actionTypes from '../constants/actionTypes'

const ACTION_HANDLERS = {
  [actionTypes.SET_METCASTS]: (state, action) => {
    return {
      ...state,
      metcasts: action.payload.metcasts
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
  user: null,
  showLoginForm: false,
  metcasts: []
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
