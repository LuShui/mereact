/**
 * Created by Administrator on 2017/10/20.
 */

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)

class IndexCom extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
export  default IndexCom;