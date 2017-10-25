/**
 * Created by Administrator on 2017/10/23.
 */

import React  from 'react'
import Parsent from './component/Parent'
import store from './reducers'
import { Provider } from 'react-redux'

class Index extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <Parsent></Parsent>
            </Provider>
        );
    }
}

export default Index;