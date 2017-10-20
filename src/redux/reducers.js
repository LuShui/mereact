/**
 * Created by Administrator on 2017/10/20.
 */
import { combineReducers } from 'redux'
import { ADD_TODO, VisibilityFilters } from './action'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = false, action) {
    switch (action.type) {
        case ADD_TODO:
            return !state;
        default:
            return state
    }
}



function  staueone(staue = [],action) {
    return staue;
}

function  stauetwo(staue = [],action) {
    return staue;
}

const todoApp = combineReducers({
    visibilityFilter,
    staueone,
    stauetwo
})

export default todoApp