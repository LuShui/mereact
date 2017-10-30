import React from 'react'
import './App.css'
// import HomeComponent from '../base/HomeComponent'
// import TodoList from '../tolist/TodoList'
// import Indexcomponent from '../redux/Indexcomponent';
// import IndexCom from '../reduxbest/index'
// import Indexcomponent from '../more/IndexComponent'
// import Index from '../async/Index'
// import IndexComponent from '../router/index'
import IndexComponent from '../reactRouter/index'
class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <IndexComponent></IndexComponent>
            </div>
        );
    }
}

export default HelloMessage