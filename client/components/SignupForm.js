import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';

class SignupForm extends Component {
  render() {
    return (
      <div>
        <h3>SignUp</h3>
        <AuthForm />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
