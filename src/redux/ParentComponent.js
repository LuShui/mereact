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
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return(
            <div>
                <div>
                    <ChildComponent visibilityFilter={visibilityFilter}  onBaseClick={text=>dispatch(addTodo(1))}></ChildComponent>
                    <SonComponent visibilityFilter={visibilityFilter}></SonComponent>
                </div>
            </div>
        )
    }
}
function select(state) {
    return {
        visibleTodos: true,
        visibilityFilter: state.visibilityFilter
    };
}
export default  connect(select)(ParentComponent);