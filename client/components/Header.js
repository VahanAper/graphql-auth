import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  { Link } from 'react-router';

import query from '../queries/CurrentUser';

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }
    if (user) {
      return <div>Logout</div>;
    }

    return (
      <div>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/"
            className="brand-logo left"
          >
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(query)(Header);
