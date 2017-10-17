/**
 * Created by Administrator on 2017/10/16.
 */

import React from 'react'
import TodoImput from './TodoInput'
import ListComponent from './LiComponent'
import './style.css'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array:[1,2,3]
        }
        this.addfunc = this.addfunc.bind(this);
    }

    addfunc(value){
        this.state.array.push(value);
        let arr = this.state.array;
        this.setState({
            array:arr
        });
    }

    render(){
        return(
            <div className="todobox">
                <TodoImput onAddfunc={this.addfunc}></TodoImput>
                <ListComponent array={this.state.array}></ListComponent>
            </div>
        );
    }
}

export default TodoList;