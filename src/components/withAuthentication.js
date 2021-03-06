import React from 'react';
import { firebase } from '../firebase';



const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
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
        console.log(authUser)
      return (
        <Component {...this.props} authUser />
      );
    }
  }

export default withAuthentication;