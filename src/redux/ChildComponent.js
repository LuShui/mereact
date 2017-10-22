/**
 * Created by Administrator on 2017/10/19.
 */
import React from 'react'
class ChildComponent extends React.Component{
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
            this.props.onaddfunc(this.state.inputvalue);
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
            <div className="childele">
                <input onChange={this.inputchangefunc} value={this.state.inputvalue}/>
                <a onClick={this.changefunc}>添加</a>
            </div>
        )
    }
}

export default ChildComponent;
