import React from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch'
import Modals from "./pages/ui/modals"
import Loading from './pages/ui/loading'
import Notice from "./pages/ui/notice"
import Message from "./pages/ui/message";
import Tab from "./pages/ui/tabs";


export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loading" component={Loading}/>
                                <Route path="/admin/ui/notification" component={Notice}/>
                                <Route path="/admin/ui/messages" component={Message}/>
                                <Route path="/admin/ui/tabs" component={Tab}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        )
    }
}