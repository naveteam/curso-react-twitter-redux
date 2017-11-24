import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Timeline from './Timeline';
import Wrapper from './Wrapper';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';

export default props => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/cadastro" component={SignUp}/>
        <Route exact path="/timeline" render={(props) => <Wrapper {...props}><Timeline /></Wrapper>}/>
        <Route exact path="/perfil" render={(props) => <Wrapper {...props}><Profile /></Wrapper>}/>
        <Route component={Login}/>
    </Switch>
)