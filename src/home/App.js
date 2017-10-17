import React from 'react'
import './App.css'
import HomeComponent from '../base/HomeComponent'
import TodoList from '../tolist/TodoList'

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <TodoList></TodoList>
            </div>
        );
    }
}

export default HelloMessage