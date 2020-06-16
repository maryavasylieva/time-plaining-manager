import { connect } from 'react-redux';
import CreateTaskButton from './CreateTaskButton';
import { taskPopUpCreateOpen } from '../../redux/componentController/componentActions';

const mDTP = dispatch => ({
  taskPopUpCreateOpen: () => dispatch(taskPopUpCreateOpen()),
});

export default connect(
  null,
  mDTP,
)(CreateTaskButton);
