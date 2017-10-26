/**
 * Created by Administrator on 2017/10/23.
 */

export const ADD_METHODS = 'ADD_METHODS';

export function addMethods(value) {
    return function (dispatch) {
        fetch('http://www.ls.com/study/index.php').then(function(response) {
            return response.json();
        }).then(function(json) {
            dispatch(requestPosts(json))
        });
    }
}

export function requestPosts(value) {
    return{
        type:ADD_METHODS,
        'value':value
    }
}