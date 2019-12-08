import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateEvent from './pages/CreateEvent'
import Game from './pages/Game'
import UserProfile from './pages/UserProfile'
import UpdateProfile from './pages/UpdateProfile'
import ViewEvent from './pages/ViewEvent'
import Logout from './pages/Logout'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/UpdatePassword'
import DeleteUser from './pages/DeleteUser'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/register_event' exact component={CreateEvent}/>
                <Route path='/game/:gameId'exact component={Game}/>
                <Route path='/user/profile' exact component={UserProfile}/>
                <Route path='/user/update' exact component={UpdateProfile}/>
                <Route path='/event/profile' exact component={ViewEvent}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/logout' exact component={Logout}/>
                <Route path='/forgot_password' exact component={ForgotPassword}/>
                <Route path='/update_password' exact component={UpdatePassword}/>
                <Route path='/user/delete' exact component={DeleteUser}/>
            </Switch>
        </BrowserRouter>
    )
}