import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './signUp';
import SignInPage from './signIn';
import PasswordForgetPage from './PasswordChange';
import Home from './Home';
import AccountPage from './Account';
import withAuthentication from './withAuthentication';

// import './';

 const LANDING = '/';
 const SIGN_UP = '/signup';
 const SIGN_IN = '/signin';
 const PASSWORD_FORGET = '/pw-forget';
 const HOME = '/home';
 const ACCOUNT = '/account';

const App = () =>
  <Router>
    <div className="app">
      <Navigation />

      <hr/>

      <Route exact path={LANDING} component={() => <LandingPage />} />
      <Route exact path={SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={HOME} component={() => <Home />} />
      <Route exact path={ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);