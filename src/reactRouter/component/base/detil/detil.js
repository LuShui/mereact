/**
 * Created by Administrator on 2017/10/30.
 */
import React from 'react'
export default class DetilConponent extends React.Component{
    render(){
        let params = this.props.params
        return(
            <div>
                {params.id}
            </div>
        )
    }
}