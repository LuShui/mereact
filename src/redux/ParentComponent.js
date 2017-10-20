/**
 * Created by Administrator on 2017/10/19.
 */
import React from 'react'
import ChildComponent from './ChildComponent';
import SonComponent from './SonComponent';

import { Provider } from 'react-redux'
import store from './store'



class ParentComponent extends React.Component{
    constructor(props){
        super(props);
        this.clickfunc = this.clickfunc.bind(this);
    }

    clickfunc(){
        store.dispatch('addTodo',{
            type:'addTodo'
        });
    }

    render(){
        return(
            <div>
                <Provider store={store}>
                    <div>
                        <h5 onClick={this.clickfunc}>redux</h5>
                        <ChildComponent></ChildComponent>
                        <SonComponent></SonComponent>
                    </div>
                </Provider>
            </div>
        )
    }
}


export default ParentComponent;