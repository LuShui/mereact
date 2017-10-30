import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import BaseCompoent from './base'
import ListComponent from '../Components/list/list';
import store from '../Redux/store/index';
import { Provider } from 'react-redux'

export default class IndexComponent extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={BaseCompoent}>
                        <IndexRoute component={ListComponent}/>
                    </Route>
                </Router>
            </Provider>

        );
    }
}
