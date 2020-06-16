import { connect } from 'react-redux';
import BackButton from './BackButton';
import { handleOpenDashboard } from '../../redux/componentController/componentActions';

const mDTP = dispatch => ({
  handleOpenDashboard: () => dispatch(handleOpenDashboard()),
});

export default connect(
  null,
  mDTP,
)(BackButton);
