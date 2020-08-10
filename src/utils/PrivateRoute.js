
import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { getToken, isLoggedIn } from './session';

// handle the private routes
export const PrivateRoute = ({ component: Component, ...rest }) => {


  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

