/**
 * Created by Administrator on 2017/10/20.
 */
import { combineReducers } from 'redux'
import { ADD_TODO } from './action'

function array(state = [],action) {

    switch (action.type){
        case ADD_TODO:
            return [action.text,...state,];
        default:
            return state
    }
}

const todoApp = combineReducers({
    array
});

export default todoApp