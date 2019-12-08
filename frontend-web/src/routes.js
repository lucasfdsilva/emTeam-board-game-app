import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreateEvent from './pages/CreateEvent'
import Game from './pages/Game'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/register_event' exact component={CreateEvent}/>
                <Route path='/game/:gameId'component={Game}/>
            </Switch>
        </BrowserRouter>
    )
}