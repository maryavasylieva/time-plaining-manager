import { connect } from 'react-redux';
import {
  postTask,
  updateTask,
  removeTask,
} from '../../redux/tasks/tasksOperations';
import {
  modalDeleteTaskOpen,
  taskPopUpCreateClose,
  taskPopUpEditClose,
} from '../../redux/componentController/componentActions';
import { getTaskInEditMode } from '../../redux/tasks/tasksSelectors';
import {
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
} from '../../redux/componentController/controllerSelectrors';
import { removeTaskFromEditMode } from '../../redux/tasks/taskActions';
import TaskPopUp from './TaskPopUp';

const mSTP = state => ({
  taskInEditMode: getTaskInEditMode(state),
  taskPopUpCreateOpen: taskPopUpCreateIsOpen(state),
  taskPopUpEditOpen: taskPopUpEditIsOpen(state),
});

const mDTP = dispatch => ({
  postTask: task => dispatch(postTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  removeTask: task => dispatch(removeTask(task)),
  modalDeleteTaskOpen: () => dispatch(modalDeleteTaskOpen()),
  taskPopUpCreateClose: () => dispatch(taskPopUpCreateClose()),
  taskPopUpEditClose: () => dispatch(taskPopUpEditClose()),
  removeTaskFromEditMode: task => dispatch(removeTaskFromEditMode(task)),
});

export default connect(
  mSTP,
  mDTP,
)(TaskPopUp);
