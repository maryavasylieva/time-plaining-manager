import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuList.module.css';

const MenuList = () => {
  return (
    <div className={styles.block}>
      <NavLink
        to="/dashboard/today"
        activeClassName={styles.selected}
        className={styles.link}
        exact
      >
        <p className={[styles.title, styles.today].join(' ')}>Today/Tom</p>
      </NavLink>
      <NavLink
        to="/dashboard/nextweek"
        activeClassName={styles.selected}
        className={styles.link}
      >
        <p className={[styles.title, styles.next].join(' ')}>Next 7</p>
      </NavLink>
      <NavLink
        to="/dashboard/burnedout"
        activeClassName={styles.selected}
        className={styles.link}
      >
        <p className={[styles.title, styles.burned].join(' ')}>Burned Out</p>
      </NavLink>
      <NavLink
        to="/dashboard/done"
        activeClassName={styles.selected}
        className={styles.link}
      >
        <p className={[styles.title, styles.done].join(' ')}>Done</p>
      </NavLink>
    </div>
  );
};

export default MenuList;
