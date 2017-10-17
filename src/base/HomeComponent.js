/**
 * Created by Administrator on 2017/10/16.
 */
import React from 'react'
import BaseMessage from  './Base'
import EventComponent from './Event'
import NameForm from './NameForm'
import Calculator from './Calculator'
import ListComponent from './ListComponent'

class HomeComponent extends React.Component{

    render(){
        return (
            <div>
                <BaseMessage name="hello component"></BaseMessage>
                <BaseMessage name="base component"></BaseMessage>
                <EventComponent></EventComponent>
                <NameForm></NameForm>
                <Calculator></Calculator>
                <ListComponent></ListComponent>
            </div>
        )
    }
}

export default HomeComponent;