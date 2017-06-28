import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    });
  }

  render() {
    return (
      <div>
        <h3>LogIn</h3>
        <AuthForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
