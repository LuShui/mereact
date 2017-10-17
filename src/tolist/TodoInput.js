/**
 * Created by Administrator on 2017/10/16.
 */

import React from 'react'
class TodoInput extends React.Component{
    constructor(props){
        super(props);
        this.changefunc = this.changefunc.bind(this);
        this.inputchangefunc = this.inputchangefunc.bind(this);
        this.state = {
            inputvalue:''
        }
        this.inputvalue = '';
    }

    changefunc(e){
        if (this.state.inputvalue){
            this.props.onAddfunc(this.state.inputvalue);
            this.setState({
                inputvalue:''
            });
        }
    }

    inputchangefunc(e){
        let value = e.target.value;
        this.setState({
            inputvalue:value
        });
    }

    render(){
        return(
            <div className="inputbox">
                <input onChange={this.inputchangefunc} value={this.state.inputvalue}/>
                <a className="addbutton" onClick={this.changefunc}>提交</a>
            </div>
        )
    }
}

export default TodoInput;
