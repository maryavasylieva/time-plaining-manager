import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as DeleteBtn } from '../../assets/icons/delete_forever-24px.svg';
import DateSelect from './DateSelect';
import RoleSelect from './RoleSelect';
import TimeSelect from './TimeSelect';
import PrioritySelect from './PrioritySelect';
import roles from '../../constants/roles';
import timeRanges from '../../constants/timeRanges';
import defineDispatcher from '../../helpers/dispatchHelper';
import styles from './TaskPopUp.module.css';
import ModalDeleteTask from '../Dashboard/ModalDeleteTask/ModalDeleteTask';

export default class TaskPopUp extends Component {
  static defaultProps = {
    taskPopUpEditOpen: false,
    taskInEditMode: null,
  };

  static propTypes = {
    taskPopUpEditOpen: PropTypes.bool,
    postTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    modalDeleteTaskOpen: PropTypes.func.isRequired,
    taskPopUpCreateClose: PropTypes.func.isRequired,
    taskPopUpEditClose: PropTypes.func.isRequired,
    removeTaskFromEditMode: PropTypes.func.isRequired,
    taskInEditMode: PropTypes.shape({
      role: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      title: PropTypes.string,
      priority: PropTypes.number,
      description: PropTypes.string,
    }),
  };

  state = {
    role: roles[4],
    date: new Date(),
    title: '',
    description: '',
    time: timeRanges[4],
    priority: 3,
  };

  componentDidMount() {
    const { taskPopUpEditOpen, taskInEditMode } = this.props;
    if (taskPopUpEditOpen) {
      const taskToEdit = { ...taskInEditMode };
      const { role, date, title, description, time, priority } = taskToEdit;
      this.setState({
        role: roles.find(elem => elem.label === role),
        title,
        description,
        time: timeRanges.find(elem => elem.label === time),
        priority,
        date: new Date(date) < new Date() ? new Date() : new Date(date),
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { taskInEditMode } = this.props;
    if (prevProps.taskInEditMode !== taskInEditMode) {
      const taskToEdit = { ...taskInEditMode };
      const { role, date, title, description, time, priority } = taskToEdit;
      this.setState({
        role: roles.find(elem => elem.label === role),
        title,
        description,
        time: timeRanges.find(elem => elem.label === time),
        priority,
        date: new Date(date) < new Date() ? new Date() : new Date(date),
      });
    }
  }

  handleRoleSelect = value => this.setState({ role: value });

  handleDateChange = date => this.setState({ date });

  handleTextInput = ({ target: { value, name } }) => {
    if (
      (name === 'title' && value.length > 150) ||
      (name === 'description' && value.length > 800)
    ) {
      return;
    }

    this.setState({ [name]: value });
  };

  handleTimeSelect = value => this.setState({ time: value });

  handlePrioritySelect = ({ target }) => {
    const priority = Number(target.getAttribute('data-priority'));
    this.setState(state => ({
      priority: state.priority !== priority ? priority : 3,
    }));
  };

  modalDeleteTaskOpen = () => this.props.modalDeleteTaskOpen();

  handleSubmit = e => {
    e.preventDefault();
    const { role, date, title, description, time, priority } = this.state;
    const {
      postTask,
      updateTask,
      removeTask,
      taskPopUpEditOpen,
      taskPopUpCreateClose,
      taskPopUpEditClose,
      removeTaskFromEditMode,
      taskInEditMode,
    } = this.props;
    if (!title.length) {
      toast.error('Enter a title!');
      return;
    }
    const taskToAdd = {
      role: role.label,
      date: new Date(date).toString(),
      title,
      description,
      time: time.label,
      priority,
    };

    if (taskPopUpEditOpen) {
      taskToAdd._id = taskInEditMode._id;
      if (defineDispatcher(taskToAdd) !== defineDispatcher(taskInEditMode))
        removeTask(taskInEditMode);
      updateTask(taskToAdd);
      taskPopUpEditClose();
      removeTaskFromEditMode(taskInEditMode);
      this.reset();
      return;
    }
    postTask(taskToAdd);
    taskPopUpCreateClose();

    this.reset();
  };

  handleClose = () => {
    const {
      taskPopUpEditOpen,
      taskPopUpCreateClose,
      taskPopUpEditClose,
      removeTaskFromEditMode,
    } = this.props;
    if (taskPopUpEditOpen) {
      removeTaskFromEditMode();
      taskPopUpEditClose();
      return;
    }
    taskPopUpCreateClose();
  };

  reset = () =>
    this.setState({
      role: roles[4],
      date: new Date(),
      title: '',
      description: '',
      time: timeRanges[4],
      priority: 3,
    });

  render() {
    const windowWidth = document.documentElement.clientWidth;
    const { taskPopUpEditOpen, taskInEditMode } = this.props;
    const { role, date, title, description, time, priority } = this.state;

    return (
      <form className={styles.outer}>
        {!taskPopUpEditOpen ? (
          <h3 className={styles.createTaskTitle}>Create Task</h3>
        ) : windowWidth < 768 ? (
          <div className={styles.helperDiv}>
            <h3 className={styles.createTaskTitle}>Edit Task</h3>
            <button
              type="button"
              className={styles.svgBtn}
              onClick={this.modalDeleteTaskOpen}
            >
              <DeleteBtn className={styles.svg} />
            </button>
          </div>
        ) : (
          <h3 className={styles.createTaskTitle}>Edit Task</h3>
        )}
        <div className={styles.helperDiv}>
          <RoleSelect
            value={role}
            onChange={this.handleRoleSelect}
            taskPopUpEditOpen={taskPopUpEditOpen}
          />
          <DateSelect value={date} onChange={this.handleDateChange} />
        </div>
        <h4 className={styles.titleTitle}>Title (up to 150 characters)</h4>
        <input
          name="title"
          value={title}
          className={styles.titleInput}
          type="text"
          placeholder="Write title"
          required
          onChange={this.handleTextInput}
          autoComplete="off"
        />
        <h4 className={styles.title}>Description (up to 800 characters)</h4>
        <textarea
          name="description"
          value={description}
          className={styles.textarea}
          placeholder="Your description"
          rows={3}
          onChange={this.handleTextInput}
        />
        <div className={styles.flexHelperDiv}>
          <TimeSelect value={time} onChange={this.handleTimeSelect} />
          <PrioritySelect
            priority={priority}
            onClick={this.handlePrioritySelect}
          />
        </div>
        {taskPopUpEditOpen && windowWidth > 767 && (
          <button
            type="button"
            className={styles.svgBtn}
            onClick={this.modalDeleteTaskOpen}
          >
            <DeleteBtn className={styles.svg} />
          </button>
        )}
        <div className={styles.btnDiv}>
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={styles.acceptBtn}
            onClick={this.handleSubmit}
          >
            Accept
          </button>
        </div>
        <ModalDeleteTask
          handleCloseEditModal={this.handleClose}
          taskToDelete={taskInEditMode}
        />
      </form>
    );
  }
}
