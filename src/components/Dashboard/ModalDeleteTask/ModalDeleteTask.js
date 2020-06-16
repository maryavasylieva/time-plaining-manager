import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ModalDeleteTask.module.css';
import { modalDeleteTaskClose } from '../../../redux/componentController/componentActions';
import { deleteTask } from '../../../redux/tasks/tasksOperations';
import { refreshUser } from '../../../redux/session/sessionOperations';

class ModalDeleteTask extends Component {
  static defaultProps = {
    taskToDelete: null,
  };

  static propTypes = {
    modalDeleteTaskClose: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    taskToDelete: PropTypes.shape({
      role: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      title: PropTypes.string,
      priority: PropTypes.number,
      description: PropTypes.string,
    }),
    handleCloseEditModal: PropTypes.func.isRequired,
    openModalDeleteTask: PropTypes.bool.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  onClose = () => {
    return this.props.modalDeleteTaskClose();
  };

  onDeleteTask = () => {
    this.props.deleteTask(this.props.taskToDelete);
    this.props.handleCloseEditModal();
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.onClose();
  };

  render() {
    const { openModalDeleteTask } = this.props;
    return (
      openModalDeleteTask && (
        <div
          role="dialog"
          className={styles.backdrop}
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
        >
          <div className={styles.modal}>
            <p className={styles.question}>
              Are you sure you want to delete the task?
            </p>
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.button}
                onClick={() => {
                  this.onDeleteTask();
                  this.onClose();
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className={styles.noButton}
                onClick={this.onClose}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  openModalDeleteTask: state.componentController.modalDeleteTaskOpen,
});

const mapDispatchToProps = {
  modalDeleteTaskClose,
  deleteTask,
  getAllTasks: refreshUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalDeleteTask);
