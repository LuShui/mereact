import React from 'react'
import './App.css'
// import HomeComponent from '../base/HomeComponent'
// import TodoList from '../tolist/TodoList'
import ParentComponent from '../redux/ParentComponent';

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <ParentComponent></ParentComponent>
            </div>
        );
    }
}

export default HelloMessage