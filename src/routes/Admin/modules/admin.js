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
  },
  [actionTypes.SET_METCAST]: (state, action) => {
    return {
      ...state,
      metcasts: [...state.metcasts, action.payload.metcast],
      tab: 'metcasts-list'
    }
  },
  [actionTypes.CHANGE_METCAST]: (state, action) => {
    return {
      ...state,
      metcasts: state.metcasts.map(item => {
        return item._id === action.payload.metcast._id
        ? {
          ...item,
          name: action.payload.metcast.name,
          url: action.payload.metcast.url,
          images: action.payload.metcast.images,
          editing: false
        } : { ...item }
      })
    }
  },
  [actionTypes.REMOVE_METCAST]: (state, action) => {
    return {
      ...state,
      metcasts: state.metcasts.filter(item => item._id !== action.payload.metcastID)
    }
  }
}

const initialState = {
  tab: 'metcasts-list'
}
export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
