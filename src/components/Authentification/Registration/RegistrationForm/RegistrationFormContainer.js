import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import { signUp } from '../../../../redux/session/sessionOperations';
import { getError } from '../../../../redux/session/sessionSelectors';

const mSTP = state => ({ errorMessage: getError(state) });

const mDTP = { signUp };
export default connect(
  mSTP,
  mDTP,
)(RegistrationForm);
