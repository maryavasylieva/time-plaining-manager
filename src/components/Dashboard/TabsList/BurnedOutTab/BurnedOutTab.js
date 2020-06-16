/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import {
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
} from '../../../../redux/componentController/controllerSelectrors';
import { getBurnedOutTasks } from '../../../../redux/tasks/tasksSelectors';
import CardList from '../../CardList/CardList';
import styles from './BurnedOutTab.module.css';
import { sortBurnedOutTasks } from '../../../../helpers/tasksFilterHelper';
import { emptyList } from '../emptyList';

class BurnedOutTab extends Component {
  state = {
    burnedOutTasks: [],
  };

  componentDidMount() {
    const { getBurnedOutTasks } = this.props;
    this.setState({
      burnedOutTasks: getBurnedOutTasks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { getBurnedOutTasks } = this.props;
    if (prevProps.getBurnedOutTasks !== getBurnedOutTasks) {
      this.setState({
        burnedOutTasks: getBurnedOutTasks,
      });
    }
  }

  render() {
    const { burnedOutTasks } = this.state;
    const { taskPopUpCreateIsOpen, taskPopUpEditIsOpen } = this.props;
    const sortTasks = sortBurnedOutTasks(burnedOutTasks);
    return (
      <main
        className={
          taskPopUpCreateIsOpen || taskPopUpEditIsOpen
            ? [styles.containerOpen]
            : [styles.container]
        }
      >
        <Element name="burnedOut">
          <section className={styles.section}>
            <p className={styles.titleButton}>Burned Out</p>
            {burnedOutTasks.length === 0 && (
              <p style={emptyList}>No out dated Tasks</p>
            )}
            <CardList cardItems={sortTasks} />
          </section>
        </Element>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  getBurnedOutTasks: getBurnedOutTasks(state),
  taskPopUpCreateIsOpen: taskPopUpCreateIsOpen(state),
  taskPopUpEditIsOpen: taskPopUpEditIsOpen(state),
});

export default connect(mapStateToProps)(BurnedOutTab);
