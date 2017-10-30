import 'whatwg-fetch'

export const BASE_ACTION = 'BASE_ACTION';

export function baseAction(value) {
    let http ='http://lushui.space/tpnote/index.php/home/home/getsoure';
    return function (dispatch) {
        let from = new FormData();
        from.append('type',value);
        fetch(http, {
            method: 'POST',
            body: from
        }).then(function (res) {
            return res.json();
        }).then((res)=>{
            dispatch(getsoure(res.ctn))
        });
    }
}


export function getsoure(value) {
    return{
        type:BASE_ACTION,
        value
    }
}