import { combineReducers } from 'redux'
import board  from './board'
import turn from './turn'
import win from './win'

export default combineReducers({
    board,
    turn, 
    win 
})