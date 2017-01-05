import {combineReducers} from 'redux'
import page from './page'
import user from './user'
import parser from './parser'

export default combineReducers({
  page,
  user,
  parser
})