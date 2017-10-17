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
            array:[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,0]
        }
        this.addfunc = this.addfunc.bind(this);
        this.deletefunc = this.deletefunc.bind(this);

    }

    addfunc(value){
        this.state.array.unshift(value);
        let arr = this.state.array;
        this.setState({
            array:arr
        });
    }

    deletefunc(value){
        let index = this.state.array.indexOf(value);
        this.state.array.splice(index,1);
        let arr = this.state.array;
        this.setState({
            array:arr
        });
    }

    render(){
        return(
            <div className="todobox">
                <TodoImput onAddfunc={this.addfunc} ></TodoImput>
                <ListComponent array={this.state.array} onDeletefunc={this.deletefunc}></ListComponent>
            </div>
        );
    }
}

export default TodoList;