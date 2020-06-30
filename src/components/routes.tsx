import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

import Home from './Home/Home'
import Login from './Login/Login';
import Register from './Register/Register';

const Routes = ({history: {push}}: {history: {push: Function}}) => {
  return (
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/register' component={Register}/>
      <Redirect from='*' to='/login' />
    </Switch>
  );
}

export default withRouter(Routes);
