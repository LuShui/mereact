/**
 * Created by Administrator on 2017/10/19.
 */
import React from 'react'

class LiComponent extends React.Component{

    render(){
        return(
          <li>
              {this.props.name}
          </li>
        );
    }
}

class SonComponent extends React.Component{

    render(){
        let array = this.props.array || [];
        return(
            <div>
                {array.map((item,index)=>
                    <LiComponent name={item} key={index}/>
                )}
            </div>
        )
    }
}

export default SonComponent;