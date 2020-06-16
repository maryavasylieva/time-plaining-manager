/*eslint-disable*/
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, scroller } from 'react-scroll';
import styles from './BurgerMenu.module.css';
import { connect } from 'react-redux';
import { burgerMenuIsOpen } from '../../../redux/componentController/controllerSelectrors';
import {
  burgerEvent,
  burgerMenuOpen,
  modalLogoutOpen,
} from '../../../redux/componentController/componentActions';
import ModalLogout from '../../Dashboard/ModalLogout/ModalLogout';

class BurgerMenu extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  handleCkick = e => {
    const { getBurgerEvent, burgerMenuOpen } = this.props;
    getBurgerEvent(e);
    burgerMenuOpen();
  };

  render() {
    const {
      isOpen,
      getBurgerEvent,
      burgerMenuOpen,
      openModalLogout,
    } = this.props;
    return (
      <>
        {isOpen && (
          <nav className={styles.burgerMenu}>
            <ul className={styles.burgerList}>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/today"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                  activeClassName={styles.selected}
                  exact
                >
                  <button
                    title="today"
                    type="button"
                    // onClick={getBurgerEvent}
                    onClick={this.handleCkick}
                    className={[styles.burgerButton, styles.today].join(' ')}
                  >
                    Today
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/today"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                  exact
                >
                  <button
                    title="tomorrow"
                    type="button"
                    // onClick={getBurgerEvent}
                    onClick={this.handleCkick}
                    className={[styles.burgerButton, styles.today].join(' ')}
                  >
                    Tomorrow
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/nextweek"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    title="next"
                    type="button"
                    // onClick={getBurgerEvent}
                    onClick={this.handleCkick}
                    className={[styles.burgerButton, styles.next].join(' ')}
                  >
                    Next 7 Days
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/nextweek"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    title="after"
                    type="button"
                    // onClick={getBurgerEvent}
                    onClick={this.handleCkick}
                    className={[styles.burgerButton, styles.next].join(' ')}
                  >
                    After 7 Days
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/burnedout"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    type="button"
                    onClick={burgerMenuOpen}
                    className={[styles.burgerButton, styles.burned].join(' ')}
                  >
                    Burned Out
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/done"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    type="button"
                    onClick={burgerMenuOpen}
                    className={[styles.burgerButton, styles.done].join(' ')}
                  >
                    Done
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/statistics"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    type="button"
                    onClick={burgerMenuOpen}
                    className={[styles.burgerButton, styles.statistics].join(
                      ' ',
                    )}
                  >
                    Statistics
                  </button>
                </NavLink>
              </li>
            </ul>
            <div className={styles.wrapper}>
              <button
                type="button"
                // onClick={burgerMenuOpen}
                onClick={openModalLogout}
                className={styles.logButton}
              >
                Log Out
              </button>
            </div>
          </nav>
        )}
        <ModalLogout />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: burgerMenuIsOpen(state),
});
const mapDispatchToProps = dispatch => ({
  getBurgerEvent: event => dispatch(burgerEvent(event.target.title)),
  burgerMenuOpen: () => dispatch(burgerMenuOpen()),
  openModalLogout: () => dispatch(modalLogoutOpen()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerMenu);
