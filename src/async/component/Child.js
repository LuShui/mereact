/**
 * Created by Administrator on 2017/10/23.
 */



import React  from 'react'

class Child extends React.Component{
    constructor(props){
        super(props);
        this.add1Func = this.add1Func.bind(this);
        this.add2Func = this.add2Func.bind(this);
        this.add3Func = this.add3Func.bind(this);
        this.add4Func = this.add4Func.bind(this);

    }

    add1Func(){
        this.props.onAddclick(1);
    }
    add2Func(){
        this.props.onAddclick(2);
    }
    add3Func(){
        this.props.onAddclick(3);
    }
    add4Func(){
        this.props.onAddclick(4);
    }

    render(){
        return(
            <div className="todobox">
                <a onClick={this.add1Func} data-index ="1" >1</a>
                <a onClick={this.add2Func} data-index ="2" >2</a>
                <a onClick={this.add3Func} data-index ="3" >3</a>
                <a onClick={this.add4Func} data-index ="4" >4</a>
            </div>
        )
    }
}


export default Child;