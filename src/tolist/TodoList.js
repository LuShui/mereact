/**
 * Created by Administrator on 2017/10/16.
 */

import React from 'react'
import TodoImput from './TodoInput'
class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <TodoImput></TodoImput>
            </div>
        );
    }
}

export default TodoList;