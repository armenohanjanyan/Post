import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signOut }  from '../actions';

import './App.css';
import { firebase } from '../firebase'
import Routes from '../routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authUser: null
    }
  }
  componentWillMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  render() {
    const { authUser } = this.state;

    return (
      <div>
        {authUser && <button className="btn btn-primary" onClick={this.props.signOut}>Sign Out</button>}
        <Routes  authUser={authUser} />
      </div>
    );
  }
}

export default connect(null, { signOut })(App);
