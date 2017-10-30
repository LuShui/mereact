import {createStore,combineReducers,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {BASE_ACTION} from '../actions/index'

function array(state=[],action) {
    if (action.type === BASE_ACTION){
        return[
            ...action.value,
            ...state
        ];
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