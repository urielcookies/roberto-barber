import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

import Home from './Home/Home'

const Routes = ({history: {push}}: {history: {push: Function}}) => {
  return (
    <Switch>
      <Route exact path='/login' component={() => <button onClick={() => push('/home')}>Log In</button>}/>
      <Route exact path='/home' component={Home}/>
      <Redirect from='*' to='/login' />
    </Switch>
  );
}

export default withRouter(Routes);
