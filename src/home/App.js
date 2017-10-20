import React from 'react'
import './App.css'
// import HomeComponent from '../base/HomeComponent'
// import TodoList from '../tolist/TodoList'
import Indexcomponent from '../redux/Indexcomponent';
// import IndexCom from '../reduxbest/index'
// import Indexcomponent from '../more/IndexComponent'

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <Indexcomponent></Indexcomponent>
            </div>
        );
    }
}

export default HelloMessage