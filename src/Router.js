import React from 'react';
import {BrowserRouter, Switch, Route}from 'react-router-dom';

import login from './LogIn';
import RecoverAccount from './RecoverAccount';
import RecoverLink from './RecoverLink';
import Signin from './Signin';
import Signin1 from './Signin1';
import Signin2 from './Signin2';
import Signin3 from './Signin3';

export default function Router() {

    return ( 
        <BrowserRouter>
            <Switch>
                
                <Route path="/login" component={login}/>
                <Route path="/RecoverLink" component={RecoverLink}/>
                <Route path="/Signin" component={Signin}/>
                <Route path="/Signin1" component={Signin1}/>
                <Route path="/Signin2" component={Signin2}/>
                <Route path="/Signin3" component={Signin3}/>
                <Route path="/" component={Signin}/>

            </Switch> 
        </BrowserRouter>
    )
}