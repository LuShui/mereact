/**
 * Created by Administrator on 2017/10/19.
 */
import React from 'react'

class SonComponent extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.visibilityFilter.toString()}</h3>
            </div>
        )
    }
}

export default SonComponent;