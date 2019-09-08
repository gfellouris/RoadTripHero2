import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import GlobalContext from '../../context/';
import Buttons from '../Buttons/Buttons';
import API from '../Utility/API';
import { handle } from './promise-handler';

class SignInGoogleBase extends Component {
  static contextType = GlobalContext;

  state = {
    error: null
  };

  handleSignIn = async () => {
    const [socialAuthUser, firebaseAuthError] = await handle(
      this.props.firebase.doSignInWithGoogle()
    );

    if (firebaseAuthError) {
      return console.log(firebaseAuthError);
    }

    if (socialAuthUser) {
      const authUserObject = {
        name: socialAuthUser.user.displayName,
        email: socialAuthUser.user.email,
        photoUrl: socialAuthUser.user.photoURL,
        uid: socialAuthUser.user.uid
      };

      const [authenticatedUser, firebaseUserError] = await handle(
        this.props.firebase.user(authUserObject.uid).set(authUserObject)
      );

      if (firebaseUserError) {
        console.log(firebaseUserError);
        this.setState({ error: firebaseUserError });
      }

      if (authenticatedUser) {
        this.setState({ error: null });

        const [userFromDatabaseResponse, databaseErr] = await handle(
          API.getUser(authUserObject)
        );

        if (databaseErr) {
          return console.log(databaseErr);
        }

        if (userFromDatabaseResponse.data.length) {
          const { id } = userFromDatabaseResponse.data;
          this.context.setUser({ ...authUserObject, id });
          this.props.history.push('/planner');
        } else {
          const [newlyCreatedUser, creationError] = handle(
            API.createUser(authUserObject)
          );

          if (creationError) {
            return console.log(creationError);
          }

          if (newlyCreatedUser) {
            const { id } = newlyCreatedUser.data;
            this.context.setUser({ ...authUserObject, id });
            this.props.history.push('/planner');
          }
        }
      }
    }
  };

  onSubmit = event => {
    event.preventDefault();

    this.handleSignIn();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        {/* <button type="submit">Sign In with Google</button> */}
        <Buttons btnStyle="success" btnName="Sign in with Google" />
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInWithGoogle = compose(
  withRouter,
  withFirebase
)(SignInGoogleBase);

export default SignInWithGoogle;