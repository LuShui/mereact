/**
 * Created by Administrator on 2017/10/16.
 */

import React from 'react'
class BoilingVerdict extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p>{this.props.celsius>=100?'水烧开了':'水没有烧开'}</p>
            </div>
        );

    }
}

export default BoilingVerdict;
