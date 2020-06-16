import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import {
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
} from '../../redux/componentController/controllerSelectrors';

const mSTP = state => ({
  taskCreateOpen: taskPopUpCreateIsOpen(state),
  taskEditOpen: taskPopUpEditIsOpen(state),
});
const mDTP = () => ({});

export default connect(
  mSTP,
  mDTP,
)(Dashboard);
