export const getUser = state => state.home.user
export const getLike = (state, metcastID) => state.home.user.likes.find(item => item.metcast_id === metcastID)
