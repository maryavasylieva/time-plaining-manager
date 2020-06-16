/*eslint-disable*/
import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import styles from './TodayTomorowTab.module.css';
import CardList from '../../CardList/CardList';
import {
  burgerEvent,
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
} from '../../../../redux/componentController/controllerSelectrors';
import { getTodayTomorrowTasks } from '../../../../redux/tasks/tasksSelectors';
import { sortTodayTomorrowTasks } from '../../../../helpers/tasksFilterHelper';
import { emptyList } from '../emptyList';

class TodayTomorrowTab extends Component {
  state = {
    isOpenToday: true,
    isOpenTomorrow: true,
    todayTasks: [],
    tomorrowTasks: [],
  };

  componentDidMount() {
    //setState  today/tomorrow tasks
    const { getTodayTomorrowTasks } = this.props;
    this.setState({
      todayTasks: [...getTodayTomorrowTasks.today],
      tomorrowTasks: [...getTodayTomorrowTasks.tomorrow],
    });

    //scroll to event from burger menu
    const { burgerEvent } = this.props;
    if (burgerEvent === 'tomorrow') {
      this.setState({
        isOpenToday: false,
      });
    }
    if (burgerEvent) {
      this.scrollFn(burgerEvent);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { getTodayTomorrowTasks } = this.props;
    if (prevProps.getTodayTomorrowTasks.today !== getTodayTomorrowTasks.today) {
      this.setState({
        todayTasks: [...getTodayTomorrowTasks.today],
      });
    }

    if (
      prevProps.getTodayTomorrowTasks.tomorrow !==
      getTodayTomorrowTasks.tomorrow
    ) {
      this.setState({
        tomorrowTasks: [...getTodayTomorrowTasks.tomorrow],
      });
    }
    //scroll to event from burger menu
    const { burgerEvent } = this.props;
    if (prevProps.burgerEvent !== burgerEvent) {
      this.scrollFn(burgerEvent);
    }
  }

  scrollFn = value => {
    scroller.scrollTo(value, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  handleToggleToday = () => {
    this.setState(state => ({
      isOpenToday: !state.isOpenToday,
    }));
  };

  handleToggleTomorrow = () => {
    this.setState(state => ({
      isOpenTomorrow: !state.isOpenTomorrow,
    }));
  };

  render() {
    const {
      isOpenToday,
      isOpenTomorrow,
      todayTasks,
      tomorrowTasks,
    } = this.state;
    const { taskPopUpCreateIsOpen, taskPopUpEditIsOpen } = this.props;
    const sortTodayTasks = sortTodayTomorrowTasks(todayTasks);
    const sortTomorrowTasks = sortTodayTomorrowTasks(tomorrowTasks);
    return (
      <>
        <main
          className={
            taskPopUpCreateIsOpen || taskPopUpEditIsOpen
              ? [styles.containerOpen]
              : [styles.container]
          }
        >
          <Element name="today">
            <section className={styles.section}>
              <button
                type="button"
                onClick={this.handleToggleToday}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className={
                  isOpenToday
                    ? [styles.titleButton, styles.titleToday].join(' ')
                    : [
                        styles.titleButton,
                        styles.dropDoun,
                        styles.titleToday,
                      ].join(' ')
                }
              >
                Today
              </button>
              {todayTasks.length === 0 && (
                <p style={emptyList}>No Tasks for Today.</p>
              )}
              {isOpenToday && <CardList cardItems={sortTodayTasks} />}
            </section>
          </Element>

          <Element name="tomorrow">
            <section className={styles.section}>
              <button
                type="button"
                onClick={this.handleToggleTomorrow}
                className={
                  isOpenTomorrow
                    ? [styles.titleButton, styles.titleTomorrow].join(' ')
                    : [
                        styles.titleButton,
                        styles.dropDoun,
                        styles.titleTomorrow,
                      ].join(' ')
                }
              >
                Tomorrow
              </button>
              {tomorrowTasks.length === 0 && (
                <p style={emptyList}> No Tasks for Tomorrow. </p>
              )}
              {isOpenTomorrow && <CardList cardItems={sortTomorrowTasks} />}
            </section>
          </Element>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  getTodayTomorrowTasks: getTodayTomorrowTasks(state),
  burgerEvent: burgerEvent(state),
  taskPopUpCreateIsOpen: taskPopUpCreateIsOpen(state),
  taskPopUpEditIsOpen: taskPopUpEditIsOpen(state),
});

export default connect(
  mapStateToProps,
  null,
)(TodayTomorrowTab);
