import { createStore, combineReducers } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
import setAvatar from './Reducers/avatarReducer'

export default createStore(combineReducers({favorite: toggleFavorite, avatars: setAvatar}))
