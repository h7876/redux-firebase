import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from './signOut';


 const LANDING = '/';
 const SIGN_UP = '/signup';
 const SIGN_IN = '/signin';
 const PASSWORD_FORGET = '/pw-forget';
 const HOME = '/home';
 const ACCOUNT = '/account';


const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <ul>
    <li><Link to={LANDING}>Landing</Link></li>
    <li><Link to={HOME}>Home</Link></li>
    <li><Link to={ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={LANDING}>Landing</Link></li>
    <li><Link to={SIGN_IN}>Sign In</Link></li>
  </ul>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);