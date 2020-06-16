import { connect } from 'react-redux';
import DoneButton from './DoneButton';
import {
  updateTask,
  removeTask,
} from '../../../../redux/tasks/tasksOperations';

const mDtP = dispatch => ({
  removeTask: task => dispatch(removeTask(task)),
  updateTask: task => dispatch(updateTask(task)),
});

export default connect(
  null,
  mDtP,
)(DoneButton);
