import { combineReducers } from 'redux'
import board  from './board'
import clickSq from './clickSq'
import turn from './turn'
import win from './win'

export default combineReducers({
    board,
    clickSq,
    turn, 
    win 
})