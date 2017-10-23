import React from 'react'
import './App.css'
// import HomeComponent from '../base/HomeComponent'
// import TodoList from '../tolist/TodoList'
// import Indexcomponent from '../redux/Indexcomponent';
// import IndexCom from '../reduxbest/index'
// import Indexcomponent from '../more/IndexComponent'
import Index from '../async/Index'

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <Index></Index>
            </div>
        );
    }
}

export default HelloMessage