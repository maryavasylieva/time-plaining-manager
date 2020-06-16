import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { isAuthentificated } from '../../redux/session/sessionSelectors';
import { errorMsg } from '../../redux/session/sessionActions';

const authRedirect = ComposedComponent => {
  class Redirect extends Component {
    static propTypes = {
      authentificated: PropTypes.bool.isRequired,
      history: ReactRouterPropTypes.history.isRequired,
      location: ReactRouterPropTypes.location.isRequired,
      error: PropTypes.func.isRequired,
    };

    componentDidMount() {
      const { authentificated, history, error } = this.props;
      const { location } = this.props;
      error();
      if (!authentificated) return;

      if (location.state && location.state.from) {
        history.replace(location.state.from);
      }
      history.replace('/dashboard');
    }

    componentDidUpdate() {
      const { authentificated, location, history } = this.props;

      if (!authentificated) return;
      if (location.state && location.state.from) {
        history.replace(location.state.from);
      }

      history.replace('/dashboard');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mSTP = state => ({ authentificated: isAuthentificated(state) });

  const mDTP = {
    error: errorMsg,
  };
  return connect(
    mSTP,
    mDTP,
  )(Redirect);
};

export default authRedirect;
