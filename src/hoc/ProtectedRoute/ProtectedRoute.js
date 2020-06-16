import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isAuthentificated } from '../../redux/session/sessionSelectors';

const ProtectedComponent = ({
  component: Component,
  authentificated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authentificated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

ProtectedComponent.propTypes = {
  component: PropTypes.func.isRequired,
  authentificated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authentificated: isAuthentificated(state),
});

export default connect(
  mapStateToProps,
  null,
)(ProtectedComponent);
