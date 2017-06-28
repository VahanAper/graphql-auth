import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
    });
  }

  render() {
    return (
      <div>
        <h3>SignUp</h3>
        <AuthForm
          errors={[]}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
