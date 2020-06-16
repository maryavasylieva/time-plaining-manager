import { combineReducers } from 'redux';
import errors from './globalErrorReducer';

const loading = (state = false, { type, payload }) => {
  switch (type) {
    case 'action-type':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ loading, errors });
