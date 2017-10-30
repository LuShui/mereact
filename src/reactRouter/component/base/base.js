import React from 'react'
import './style.css'
import {browserHistory} from 'react-router'
export default class BaseComponent extends React.Component{

    render(){
        let array = [1,2,3,4,5,6,7,8,9];
        return(
            <div>
                <ul>
                    {array.map((item,index)=><LiComponent value={item} key={index.toString()}/>)}
                </ul>
            </div>
        )
    }
}

class LiComponent extends React.Component{
    constructor(){
        super();
        this.onclickfunc = this.onclickfunc.bind(this);
    }

    onclickfunc(){
        browserHistory.push('/base/'+this.props.value);
    }

    render(){
        return(
            <li onClick={this.onclickfunc}>{this.props.value}</li>
        );
    }
}
