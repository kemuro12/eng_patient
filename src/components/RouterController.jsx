import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserInfo from './UserInfo';
import LoginPage from './LoginPage';
import NotFound from './NotFound';
import { useSelector } from 'react-redux';

const RouterController = props => {
    const user = useSelector(state => state.user.user)

    return (
        <Switch>
            <Route exact path="/" render={ () => user ? <UserInfo /> : <LoginPage currentForm="signin" />} />
            <Route path="*" render={() => <NotFound/>} />
        </Switch>
    )
}

export default RouterController