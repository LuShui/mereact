/**
 * Created by Administrator on 2017/10/23.
 */

import React  from 'react'

class Licomponent extends React.Component{
    render(){
        return(
            <li>
                <div>
                    {this.props.name}
                </div>
            </li>
        );
    }
}


class Son extends React.Component{

    render(){
        let array = this.props.array;
        return(
            <div>
                <ul>
                    {array.map((item,index)=><Licomponent name={item} key={index}/>)}
                </ul>
            </div>
        )
    }
}


export default Son;