/**
 * Created by Administrator on 2017/10/14.
 */

import React from 'react'
class EventComponent extends React.Component{
    constructor(props){
        super(props);
        this.myclick = this.myclick.bind(this);
    }
    myclick(){
        console.log(this);
        console.log(1);
    }
    render(){
        return (
            <div>
                <div onClick={this.myclick}>
                    click me
                </div>
            </div>
        )
    }
}

export default EventComponent;
