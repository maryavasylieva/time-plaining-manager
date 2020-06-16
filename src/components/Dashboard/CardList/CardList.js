/*eslint-disable*/
import React from 'react';
import Card from '../Card/Card';
import styles from '../CardList/CardList.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
} from '../../../redux/componentController/controllerSelectrors';

const CardList = ({
  cardItems,
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
}) => {
  return (
    <div>
      <ul
        className={`${styles.cardsTrsn}
          ${
            taskPopUpCreateIsOpen || taskPopUpEditIsOpen
              ? [styles.cardListOpen]
              : [styles.cardList]
          }
        `}
      >
        {cardItems.map(el => (
          <li
            className={
              taskPopUpCreateIsOpen || taskPopUpEditIsOpen
                ? [styles.cardItemOpen]
                : [styles.cardItem]
            }
            key={el._id}
          >
            <Card task={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  taskPopUpCreateIsOpen: taskPopUpCreateIsOpen(state),
  taskPopUpEditIsOpen: taskPopUpEditIsOpen(state),
});

export default connect(
  mapStateToProps,
  null,
)(CardList);
