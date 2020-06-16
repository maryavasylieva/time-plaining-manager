import React from 'react';
import PropTypes from 'prop-types';
import style from './EditButton.module.css';
import { ReactComponent as Edit } from '../../../../assets/icons/edit-24px.svg';

const EditButton = ({
  task,
  onClick,
  TaskToEditMode,
  removeTaskFromEditMode,
  taskInEditMode,
  taskPopUpCreateIsOpen,
}) => (
  <button
    type="button"
    className={taskPopUpCreateIsOpen ? style.EditBtnNoHover : style.EditBtn}
    disabled={taskPopUpCreateIsOpen}
    onClick={() => {
      if (taskInEditMode) removeTaskFromEditMode();
      onClick();
      TaskToEditMode(task);
    }}
  >
    <Edit />
  </button>
);

EditButton.defaultProps = {
  taskInEditMode: null,
};

EditButton.propTypes = {
  task: PropTypes.shape({
    role: PropTypes.string,
    time: PropTypes.string,
    priority: PropTypes.number,
    isComplete: PropTypes.bool,
    _id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    userId: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    __v: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  TaskToEditMode: PropTypes.func.isRequired,
  removeTaskFromEditMode: PropTypes.func.isRequired,
  taskInEditMode: PropTypes.shape({
    role: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    priority: PropTypes.number,
    description: PropTypes.string,
  }),
  taskPopUpCreateIsOpen: PropTypes.bool.isRequired,
};

export default EditButton;
