import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
    }).catch((err) => {
      const errors = err.graphQLErrors.map(error => error.message);

      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>SignUp</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
