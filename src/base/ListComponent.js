/**
 * Created by Administrator on 2017/10/17.
 */

import React from 'react'


class Licomponent extends React.Component{
    render(){
        return(
            <li>
                <a>{this.props.name}</a>
            </li>
        )
    }
}


class ListComponent extends React.Component{
    render(){
        let list = [1,2,3,4,5,6,7,8,9];
        const listItems = list.map((number,index) =>
            <Licomponent name={number} key={index}></Licomponent>
        );

        return(
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default ListComponent;