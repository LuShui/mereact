/**
 * Created by Administrator on 2017/10/17.
 */


import React from 'react'

class LiComponent extends React.Component{
    constructor(props){
        super(props);
        this.deletefunc = this.deletefunc.bind(this);

    }

    deletefunc(){
        this.props.ondeletefunc(this.props.name);
    }

    render(){
        return(
            <li className="liitem">
                <a onClick={this.deletefunc}>
                {this.props.name}
                </a>
            </li>
        )
    }
}


class ListComponent extends React.Component{

    render(){
        let array = this.props.array;
        return(
            <ul>
                {array.map((item,index)=>
                    <LiComponent name={item} key={index} ondeletefunc={this.props.onDeletefunc}></LiComponent>
                )}
            </ul>
        )
    }
}



export default ListComponent;