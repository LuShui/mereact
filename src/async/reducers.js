/**
 * Created by Administrator on 2017/10/23.
 */

import {ADD_METHODS} from './actions'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

function array(state = [],action) {
    if (action.type === ADD_METHODS){
        return [action.value,...state];
    }else {
        return state;
    }
}

let jsonvalue = combineReducers({
    array
});

let store = createStore(jsonvalue);

export default store;



