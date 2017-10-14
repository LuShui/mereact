import React from 'react'
import './App.css'
import BaseMessage from  '../base/Base.js'
import EventComponent from '../base/Event'


class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <BaseMessage name="hello component"></BaseMessage>
                <BaseMessage name="base component"></BaseMessage>
                <EventComponent></EventComponent>
            </div>
        );
    }
}

export default HelloMessage