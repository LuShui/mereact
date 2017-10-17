/**
 * Created by Administrator on 2017/10/17.
 */


import React from 'react'

class LiComponent extends React.Component{
    render(){
        return(
            <li>{this.props.name}</li>
        )
    }
}


class ListComponent extends React.Component{

    render(){
        let array = this.props.array;
        return(
            <ul>
                {array.map((item,index)=>
                    <LiComponent name={item} key={index}></LiComponent>
                )}
            </ul>
        )
    }
}


export default ListComponent;