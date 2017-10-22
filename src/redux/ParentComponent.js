/**
 * Created by Administrator on 2017/10/19.
 */
import React from 'react'
import ChildComponent from './ChildComponent';
import SonComponent from './SonComponent';
import { connect } from 'react-redux';
import { addTodo } from './action';

class ParentComponent extends React.Component{
    render(){
        const { dispatch, array } = this.props;

        return(
            <div className="parseele">
                <div>
                    <ChildComponent onaddfunc={text=>dispatch(addTodo(text))}></ChildComponent>
                    <SonComponent array={array}></SonComponent>
                </div>
            </div>
        )
    }
}
function select(state) {
    return {
        array: state.array
    };
}
export default  connect(select)(ParentComponent);