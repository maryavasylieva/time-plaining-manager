/* eslint-disable */

import { combineReducers } from 'redux';
import { ActionTypes } from '../tasks/taskActions';

const modalDeleteError = (state = null, { type, payload }) => {
  return state;
};
const modalLogoutError = (state = null, { type, payload }) => {
  return state;
};
const taskPopUpError = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_TODAY_TASK_ERROR:
    case ActionTypes.POST_TOMORROW_TASK_ERROR:
    case ActionTypes.POST_NEXT_TASK_ERROR:
    case ActionTypes.POST_AFTER_TASK_ERROR:
    case ActionTypes.UPDATE_TODAY_TASK_ERROR:
    case ActionTypes.UPDATE_TOMORROW_TASK_ERROR:
    case ActionTypes.UPDATE_NEXT_TASK_ERROR:
    case ActionTypes.UPDATE_AFTER_TASK_ERROR:
    case ActionTypes.UPDATE_DONE_TASK_ERROR:
    case ActionTypes.REMOVE_TODAY_TASK_ERROR:
    case ActionTypes.REMOVE_TOMORROW_TASK_ERROR:
    case ActionTypes.REMOVE_NEXT_TASK_ERROR:
    case ActionTypes.REMOVE_AFTER_TASK_ERROR:
    case ActionTypes.REMOVE_BURNED_TASK_ERROR:
      return payload;
    default:
      return state;
  }
};
const loginError = (state = null, { type, payload }) => {
  return state;
};
const registrationError = (state = null, { type, payload }) => {
  return state;
};

export default combineReducers({
  modalDeleteError,
  modalLogoutError,
  taskPopUpError,
  loginError,
  registrationError,
});
