import 'babel-polyfill'
import React from 'react'
import Root from './containers/Root'
class IndexComponent extends React.Component{
    render(){
        return(
            <div>
                <Root></Root>
            </div>
        )
    }
}

export default IndexComponent;