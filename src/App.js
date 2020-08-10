import React, { Component, useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import axios from 'axios';
import { getToken, removeUserSession, setUserSession } from './utils/session';
import { apiBase } from './services/Rest';
import { PublicRoute }  from './utils/PublicRoute';
import { PrivateRoute }  from './utils/PrivateRoute';



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"><h2>Loading...</h2></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


const token = getToken();
console.log("token: "+token);

export default class App extends Component {

  
  


  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <PublicRoute path="/login" name="Login Page" component={Login} />
              <PublicRoute path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
              <Route exact path="/500" name="Page 500" component={Page500} />
              <PrivateRoute path="/" name="Home" component={TheLayout} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}


