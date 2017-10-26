/**
 * Created by Administrator on 2017/10/23.
 */

import {ADD_METHODS} from './actions'
import {createStore,combineReducers,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

function array(state = [],action) {
    if (action.type === ADD_METHODS){
        return [...action.value,...state];
    }else {
        return state;
    }
}

let jsonvalue = combineReducers({
    array
});

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(jsonvalue, initialState)
}

