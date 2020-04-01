/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <nav className="login">
      <h2>Inventory login</h2>
      <p>Sign in to manage your store's inventory.</p>
      <button
        type="button"
        className="github"
        onClick={() => {
          props.authenticate('Github');
        }}
      >
        Log In With GitHub
      </button>
      <button
        type="button"
        className="facebook"
        onClick={() => {
          props.authenticate('Facebook');
        }}
      >
        Log In With Facebook
      </button>
    </nav>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
