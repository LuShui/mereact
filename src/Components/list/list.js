/**
 * Created by Administrator on 2017/10/30.
 */
import React from 'react'
import './style.css'
import { connect } from 'react-redux';
import {baseAction} from '../../Redux/actions/index'
class ListComponent extends React.Component{

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(baseAction(1));
    }

    render(){
        let array = this.props.array;
        return(
            <div>
                {array.map((item,index)=><LiComponent value={item} key={index.toString()}/>)}
            </div>
        )
    }
}


class LiComponent extends React.Component{
    render(){
        return(
            <li>
                {this.props.value.des}
            </li>
        )
    }
}

function soure(state) {
    return{
        array:state.array
    }
}

export default connect(soure)(ListComponent);
