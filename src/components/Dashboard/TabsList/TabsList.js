/*eslint-disable */
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from './Loader';
import MenuList from './MenuList/MenuList';
import styles from './TabsList.module.css';
import { taskPopUpCreateIsOpen } from '../../../redux/componentController/controllerSelectrors';

// import TodayTab from './TodayTomorrowTab/TodayTomorrowTab';
// import NextWeekTab from './NexWeekTab/NexWeekTab';
// import BurnedOutTab from './BurnedOutTab/BurnedOutTab';
// import DoneTab from './DoneTab/DoneTab';

const AsyncTodayTab = Loadable({
  loader: () =>
    import(
      './TodayTomorrowTab/TodayTomorrowTab' /* webpackChunkName: "TodayTomorrow-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncNextWeekTab = Loadable({
  loader: () =>
    import('./NexWeekTab/NexWeekTab' /* webpackChunkName: "NexWeek-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncBurnedOutTab = Loadable({
  loader: () =>
    import(
      './BurnedOutTab/BurnedOutTab' /* webpackChunkName: "BurnedOutTab-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncDoneTab = Loadable({
  loader: () =>
    import('./DoneTab/DoneTab' /* webpackChunkName: "DoneTab-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

class TabsList extends Component {
  state = {};

  render() {
    const { taskPopUpCreateIsOpen } = this.props;
    return (
      // <div className={styles.container}>
      <div
        className={
          taskPopUpCreateIsOpen
            ? [styles.container]
            : [styles.container, styles.opened].join(' ')
        }
      >
        <MenuList />
        <div className={styles.content}>
          <Switch>
            <Route path="/dashboard/today" component={AsyncTodayTab} />
            <Route path="/dashboard/nextweek" component={AsyncNextWeekTab} />
            <Route path="/dashboard/burnedout" component={AsyncBurnedOutTab} />
            <Route path="/dashboard/done" component={AsyncDoneTab} />
            <Redirect to="/dashboard/today" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskPopUpCreateIsOpen: taskPopUpCreateIsOpen(state),
});

export default connect(
  mapStateToProps,
  null,
)(TabsList);
