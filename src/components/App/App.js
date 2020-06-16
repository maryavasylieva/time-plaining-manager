import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { refreshUser } from '../../redux/session/sessionOperations';
import Loading from '../Dashboard/TabsList/Loaders';
import ProtectedComponent from '../../hoc/ProtectedRoute/ProtectedRoute';
import BurgerMenu from '../../pages/BurgerMenuPage/BurgerMenuPage';
import { getToken } from '../../redux/session/sessionSelectors';

const AsyncDashboard = lazy(() =>
  import('../../pages/DashboardPage/DashboardPage'),
);
const AsyncLogin = lazy(() => import('../../pages/AuthPage/LoginPage'));
const AsyncRegistration = lazy(() =>
  import('../../pages/AuthPage/RegistrationPage'),
);
const AsyncStatistics = lazy(() =>
  import('../../pages/StatisticsPage/StatisticsPage'),
);
class App extends Component {
  static defaultProps = {
    token: '',
  };

  static propTypes = {
    refreshUserData: PropTypes.func.isRequired,
    token: PropTypes.string,
  };

  state = {
    loading: false,
  };

  componentDidMount() {
    const { refreshUserData, token } = this.props;
    if (!token) return;

    this.setState({ loading: true });
    refreshUserData()
      .then(() => null)
      .catch(err => {
        throw new Error(`error while refreshing user: ${err}`);
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    return (
      <Suspense fallback={<Loading />}>
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route path="/login" component={AsyncLogin} />
            <Route path="/registration" component={AsyncRegistration} />
            <ProtectedComponent path="/menu" component={BurgerMenu} />
            <ProtectedComponent path="/dashboard" component={AsyncDashboard} />
            <ProtectedComponent
              path="/statistics"
              component={AsyncStatistics}
            />
            <Redirect to="/dashboard" />
          </Switch>
        )}
      </Suspense>
    );
  }
}

const mSTP = state => ({
  token: getToken(state),
});

const mDTP = {
  refreshUserData: refreshUser,
};

export default connect(
  mSTP,
  mDTP,
)(App);
