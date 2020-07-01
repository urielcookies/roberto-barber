import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

import Home from './Home/Home'
import Login from './Login/Login';
import Register from './Register/Register';

const Routes = ({history: {push}}: {history: {push: Function}}) => {
  return (
    <Switch>
      <Route exact path='/roberto-barber/login' component={Login}/>
      <Route exact path='/roberto-barber/home' component={Home}/>
      <Route exact path='/roberto-barber/register' component={Register}/>
      <Redirect from='*' to='/roberto-barber/login' />
    </Switch>
  );
}

export default withRouter(Routes);
