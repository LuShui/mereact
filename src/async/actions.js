/**
 * Created by Administrator on 2017/10/23.
 */

export const ADD_METHODS = 'ADD_METHODS';

export function addMethods(value) {
    return{
        type:ADD_METHODS,
        'value':value
    }
}