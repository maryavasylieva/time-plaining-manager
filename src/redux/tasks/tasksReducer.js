import { combineReducers } from 'redux';
import { ActionTypes as SessionActionTypes } from '../session/sessionActions';
import { ActionTypes } from './taskActions';

const today = (state = [], { type, payload }) => {
  switch (type) {
    case SessionActionTypes.REFRESH_USER_SUCCESS:
      return payload.response.todayTomorrow.today;

    case ActionTypes.POST_TODAY_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_TODAY_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.DELETE_TODAY_TASK_SUCCESS:
    case ActionTypes.REMOVE_TODAY_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const tomorrow = (state = [], { type, payload }) => {
  switch (type) {
    case SessionActionTypes.REFRESH_USER_SUCCESS:
      return payload.response.todayTomorrow.tomorrow;
    case ActionTypes.POST_TOMORROW_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_TOMORROW_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.DELETE_TOMORROW_TASK_SUCCESS:
    case ActionTypes.REMOVE_TOMORROW_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const next = (state = [], { type, payload }) => {
  switch (type) {
    case SessionActionTypes.REFRESH_USER_SUCCESS:
      return payload.response.nextAfter.next;
    case ActionTypes.POST_NEXT_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_NEXT_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.DELETE_NEXT_TASK_SUCCESS:
    case ActionTypes.REMOVE_NEXT_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const after = (state = [], { type, payload }) => {
  switch (type) {
    case SessionActionTypes.REFRESH_USER_SUCCESS:
      return payload.response.nextAfter.after;
    case ActionTypes.POST_AFTER_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_AFTER_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.REMOVE_AFTER_TASK_SUCCESS:
    case ActionTypes.DELETE_AFTER_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const burnedOut = (state = [], { type, payload }) => {
  switch (type) {
    case SessionActionTypes.REFRESH_USER_SUCCESS:
      return payload.response.burnedOut;
    case ActionTypes.POST_BURNED_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.DELETE_BURNED_TASK_SUCCESS:
    case ActionTypes.REMOVE_BURNED_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const done = (state = [], { type, payload }) => {
  switch (type) {
    case SessionActionTypes.REFRESH_USER_SUCCESS:
      return payload.response.done;
    case ActionTypes.UPDATE_DONE_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    default:
      return state;
  }
};

const taskInEditMode = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.PUT_TASK_TO_EDIT_MODE:
      return payload;
    case ActionTypes.REMOVE_TASK_FROM_EDIT_MODE:
      return null;
    default:
      return state;
  }
};

const todayTomorrow = combineReducers({ today, tomorrow });
const nextAfter = combineReducers({ next, after });
const tasks = combineReducers({
  todayTomorrow,
  nextAfter,
  burnedOut,
  done,
  taskInEditMode,
});

export default tasks;
