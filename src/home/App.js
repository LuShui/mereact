import React from 'react'
import './App.css'
import BaseMessage from  '../base/Base'
import EventComponent from '../base/Event'
import NameForm from '../base/NameForm'

class HelloMessage extends React.Component {
    render() {
        return (
            <div className="App">
                <BaseMessage name="hello component"></BaseMessage>
                <BaseMessage name="base component"></BaseMessage>
                <EventComponent></EventComponent>
                <NameForm></NameForm>
            </div>
        );
    }
}

export default HelloMessage