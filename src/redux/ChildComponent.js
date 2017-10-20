/**
 * Created by Administrator on 2017/10/19.
 */
import React from 'react'
class ChildComponent extends React.Component{
    constructor(){
        super();
        this.clickfunc = this.clickfunc.bind(this);
    }

    clickfunc(){
        this.props.onBaseClick(1);
    }

    render(){
        return(
            <div>
                <h3 onClick={this.clickfunc}>{this.props.visibilityFilter.toString()}</h3>
            </div>
        )
    }
}

export default ChildComponent;
