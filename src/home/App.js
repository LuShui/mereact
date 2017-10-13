import React from 'react'
import './App.css'
import BaseMessage from  '../base/Base.js'

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <BaseMessage></BaseMessage>
                <BaseMessage></BaseMessage>
            </div>
        );
    }
}

export default HelloMessage