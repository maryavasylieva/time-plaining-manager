/* eslint-disable */
import { combineReducers } from 'redux';
import { ActionTypes } from './componentActions';

const modalDeleteTaskOpen = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.MODAL_DELETE_TASK_OPEN:
      return true;
    case ActionTypes.MODAL_DELETE_TASK_CLOSE:
      return false;

    default:
      return state;
  }
};

const statisticsOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_STATISTICS:
      return true;
    case ActionTypes.HANDLE_OPEN_DASHBOARD:
      return false;
    default:
      return state;
  }
};

const modalLogoutOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_MODAL_LOGOUT:
      return true;
    case ActionTypes.HANDLE_CLOSE_MODAL_LOGOUT:
      return false;

    default:
      return state;
  }
};

const taskPopUpСreateOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_TASK_POPUP_CREATE:
      return true;
    case ActionTypes.HANDLE_CLOSE_TASK_POPUP_CREATE:
      return false;
    default:
      return state;
  }
};

const taskPopUpEditOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_TASK_POPUP_EDIT:
      return true;
    case ActionTypes.HANDLE_CLOSE_TASK_POPUP_EDIT:
      return false;
    default:
      return state;
  }
};

const burgerMenuOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_BURGER_MENU:
      return !state;

    default:
      return state;
  }
};

const createTaskButtonOpen = (state = false, { type, payload }) => {
  return state;
};

const tabsListOpen = (state = false, { type, payload }) => {
  return state;
};

const burgerEvent = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_BURGER_EVENT_BUTTON:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  modalDeleteTaskOpen,
  statisticsOpen,
  modalLogoutOpen,
  taskPopUpСreateOpen,
  taskPopUpEditOpen,
  burgerMenuOpen,
  burgerEvent,
  createTaskButtonOpen,
  tabsListOpen,
});
