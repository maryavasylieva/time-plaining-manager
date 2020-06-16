import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart/Chart';
import Table from './Table/Table';
import Header from '../Header/Header';
import styles from './Statistic.module.css';
import BackButton from '../BackButton/BackButtonContainer';
import roleFilter from '../../helpers/roleFilter';
import Selector from './Select/Select';
import periodFilter from '../../helpers/periodFIlter';

class Statistics extends Component {
  state = {};

  onSelectChange = select => {
    this.setState({ selected: select });
  };

  rolesSum = (todayTomorrow, nextAfter, burnedOut, done) => {
    const { today, tomorrow } = todayTomorrow;
    const { next, after } = nextAfter;

    const { selected } = this.state;

    const _today = periodFilter(selected, today);
    const _tomorrow = periodFilter(selected, tomorrow);
    const _next = periodFilter(selected, next);
    const _after = periodFilter(selected, after);
    const _burnedOut = periodFilter(selected, burnedOut);
    const _done = periodFilter(selected, done);

    const todayFiltered = roleFilter(_today);
    const tomorrowFiltered = roleFilter(_tomorrow);
    const nextFiltered = roleFilter(_next);
    const afterFiltered = roleFilter(_after);
    const burnedOutFiltered = roleFilter(_burnedOut);
    const doneFiltered = roleFilter(_done);

    const partnerSum =
      todayFiltered.partner +
      tomorrowFiltered.partner +
      nextFiltered.partner +
      afterFiltered.partner +
      burnedOutFiltered.partner +
      doneFiltered.partner;

    const learnerSum =
      todayFiltered.learner +
      tomorrowFiltered.learner +
      nextFiltered.learner +
      afterFiltered.learner +
      burnedOutFiltered.learner +
      doneFiltered.learner;

    const dotherSonSum =
      todayFiltered.dotherSon +
      tomorrowFiltered.dotherSon +
      nextFiltered.dotherSon +
      afterFiltered.dotherSon +
      burnedOutFiltered.dotherSon +
      doneFiltered.dotherSon;

    const coWorkerSum =
      todayFiltered.coWorker +
      tomorrowFiltered.coWorker +
      nextFiltered.coWorker +
      afterFiltered.coWorker +
      burnedOutFiltered.coWorker +
      doneFiltered.coWorker;

    const noneSum =
      todayFiltered.none +
      tomorrowFiltered.none +
      nextFiltered.none +
      afterFiltered.none +
      burnedOutFiltered.none +
      doneFiltered.none;

    return [partnerSum, learnerSum, dotherSonSum, coWorkerSum, noneSum];
  };

  render() {
    const { tasks } = this.props;
    const { burnedOut, nextAfter, todayTomorrow, done } = tasks.tasks;
    const screenWidth = document.documentElement.clientWidth;

    return (
      <>
        <Header />
        <div className={styles.wrapper}>
          {screenWidth > 767 && <aside className={styles.aside} />}
          <div className={styles.outer}>
            <div className={styles.inner}>
              <h2 className={styles.pageName}> Statistics </h2>
              <div className={styles.componentsWraper}>
                <div className={styles.chartWraper}>
                  <Selector status={this.onSelectChange} />
                  <Chart data={done} />
                </div>
                <div className={styles.tableWraper}>
                  <Table
                    data={done}
                    dataTotal={this.rolesSum(
                      todayTomorrow,
                      nextAfter,
                      burnedOut,
                      done,
                    )}
                  />
                </div>
              </div>
              {screenWidth < 768 && <BackButton className={styles.button} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state,
});

export default connect(
  mapStateToProps,
  null,
)(Statistics);
