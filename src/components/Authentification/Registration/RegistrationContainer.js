import { connect } from 'react-redux';
import Registration from './Registration';
import { signUp } from '../../../redux/session/sessionOperations';

const mSTP = () => null;
const mDTP = { signUp };

export default connect(
  mSTP,
  mDTP,
)(Registration);
