/**
 * Created by Administrator on 2017/10/20.
 */
import React from 'react'
import ParentComponent from './ParentComponent'
import { Provider } from 'react-redux'
import store from './store'
import './style.css'
class Indexcomponent extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ParentComponent />
            </Provider>
        )
    }
}
export  default Indexcomponent;