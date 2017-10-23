/**
 * Created by Administrator on 2017/10/23.
 */


import React  from 'react'
import Child from './Child'
import Son from './Son'
import './style.css'
class Parent extends React.Component{

    render(){
        return(
            <div className="parentele">
                <Child></Child>
                <Son></Son>
            </div>
        )
    }
}


export default Parent;