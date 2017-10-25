/**
 * Created by Administrator on 2017/10/23.
 */


import React  from 'react'
import Child from './Child'
import Son from './Son'
import { connect } from 'react-redux';
import {addMethods} from '../actions'
import './style.css'
class Parent extends React.Component{

    render(){
        const {dispatch, array} = this.props;
        return(
            <div className="parentele">
                <Child onAddclick={text=>dispatch(addMethods(text))}></Child>
                <Son array={array}></Son>
            </div>
        )
    }
}

function soure(state) {
    return{
        array:state.array
    }
}

export default connect(soure)(Parent);