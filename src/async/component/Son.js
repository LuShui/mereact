/**
 * Created by Administrator on 2017/10/23.
 */

import React  from 'react'


class Licomponent extends React.Component{
    render(){
        return(
            <li>
                <div>
                    111111
                </div>
            </li>
        );
    }
}


class Son extends React.Component{

    render(){
        let array = [1,2,3,4,5,6,7,8];
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