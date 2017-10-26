/**
 * Created by Administrator on 2017/10/23.
 */

import React  from 'react'
import Parsent from './component/Parent'
import configureStore from './reducers'
import { Provider } from 'react-redux'

const store = configureStore();

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