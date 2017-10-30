import React from 'react';
import { Router, Route, browserHistory,IndexRoute,hashHistory } from 'react-router';
import Home from './component/Home';
import BaseComponent from './component/base/base'
import DetilConponent from './component/base/detil/detil'



export default class IndexComponent extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    <IndexRoute component={BaseComponent}/>
                    <Route path="/base/:id" component={DetilConponent}/>
                    {/*<Route path="about" component={About} />*/}
                    {/*<Route path="inbox" component={Inbox}>*/}
                        {/*<Route path="messages/:id" component={Message} />*/}
                    {/*</Route>*/}
                </Route>
            </Router>
        );
    }
}









