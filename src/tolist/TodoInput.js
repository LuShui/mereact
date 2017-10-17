/**
 * Created by Administrator on 2017/10/16.
 */

import React from 'react'
class TodoInput extends React.Component{
    constructor(props){
        super(props);
        this.changefunc = this.changefunc.bind(this);
        this.inputchangefunc = this.inputchangefunc.bind(this);
        this.inputvalue = '';
    }

    changefunc(e){
        this.props.onAddfunc(this.inputvalue);
    }

    inputchangefunc(e){
        this.inputvalue = e.target.value;
    }

    render(){
        return(
            <div>
                <input onChange={this.inputchangefunc} />
                <a onClick={this.changefunc}>提交</a>
            </div>
        )
    }
}

export default TodoInput;
