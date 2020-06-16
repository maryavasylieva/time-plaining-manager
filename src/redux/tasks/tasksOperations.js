/* eslint-disable*/

import * as api from '../../services/tasks-api';
import * as taskHandlers from './taskActions';
import { getToken } from '../session/sessionSelectors';
import defineDispatcher from '../../helpers/dispatchHelper';
import taskTypes from '../../constants/taskTypes';

// export const getAllTasks = credentials => dispatch => {
//   return api.getTasks().then();
// };

export const postTask = task => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;

  const dispatcher = defineDispatcher(task);

  switch (dispatcher) {
    case taskTypes.TODAY:
      dispatch(taskHandlers.postTaskTodayRequest());
      break;
    case taskTypes.TOMORROW:
      dispatch(taskHandlers.postTaskTomorrowRequest());
      break;
    case taskTypes.NEXT:
      dispatch(taskHandlers.postTaskNextRequest());
      break;
    default:
      dispatch(taskHandlers.postTaskAfterRequest());
  }

  api
    .postTask(task, token)
    .then(({ data }) => {
      switch (dispatcher) {
        case taskTypes.TODAY:
          dispatch(taskHandlers.postTaskTodaySuccess(data.task));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.postTaskTomorrowSuccess(data.task));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.postTaskNextSuccess(data.task));
          break;
        default:
          dispatch(taskHandlers.postTaskAfterSuccess(data.task));
      }
    })
    .catch(error => {
      switch (dispatcher) {
        case taskTypes.TODAY:
          dispatch(taskHandlers.postTaskTodayError(error));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.postTaskTomorrowError(error));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.postTaskNextError(error));
          break;
        default:
          dispatch(taskHandlers.postTaskAfterError(error));
      }
    });
};

export const updateTask = task => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;

  const dispatcher = task.isComplete ? taskTypes.DONE : defineDispatcher(task);

  switch (dispatcher) {
    case taskTypes.DONE:
      dispatch(taskHandlers.updateTaskDoneRequest());
      break;
    case taskTypes.TODAY:
      dispatch(taskHandlers.updateTaskTodayRequest());
      break;
    case taskTypes.TOMORROW:
      dispatch(taskHandlers.updateTaskTomorrowRequest());
      break;
    case taskTypes.NEXT:
      dispatch(taskHandlers.updateTaskNextRequest());
      break;
    default:
      dispatch(taskHandlers.updateTaskAfterRequest());
  }

  api
    .updateTask(task, token, task._id)
    .then(({ data: { updatedTask } }) => {
      switch (dispatcher) {
        case taskTypes.DONE:
          dispatch(taskHandlers.updateTaskDoneSuccess(updatedTask));
          break;
        case taskTypes.TODAY:
          dispatch(taskHandlers.updateTaskTodaySuccess(updatedTask));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.updateTaskTomorrowSuccess(updatedTask));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.updateTaskNextSuccess(updatedTask));
          break;
        default:
          dispatch(taskHandlers.updateTaskAfterSuccess(updatedTask));
      }
    })
    .catch(error => {
      switch (dispatcher) {
        case taskTypes.DONE:
          dispatch(taskHandlers.updateTaskDoneError(error));
          break;
        case taskTypes.TODAY:
          dispatch(taskHandlers.updateTaskTodayError(error));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.updateTaskTomorrowError(error));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.updateTaskNextError(error));
          break;
        default:
          dispatch(taskHandlers.updateTaskAfterError(error));
      }
    });
};

export const deleteTask = task => (dispatch, getState) => {
  console.log('task', task);
  const token = getToken(getState());
  if (!token) return;

  const dispatcher = defineDispatcher(task);

  switch (dispatcher) {
    case taskTypes.TODAY:
      dispatch(taskHandlers.deleteTaskTodayRequest());
      break;
    case taskTypes.TOMORROW:
      dispatch(taskHandlers.deleteTaskTomorrowRequest());
      break;
    case taskTypes.NEXT:
      dispatch(taskHandlers.deleteTaskNextRequest());
      break;
    case taskTypes.AFTER:
      dispatch(taskHandlers.deleteTaskAfterRequest());
      break;
    default:
      dispatch(taskHandlers.deleteTaskBurnedRequest());
  }
  api
    .deleteTask(token, task._id)
    .then(() => {
      switch (dispatcher) {
        case taskTypes.TODAY:
          dispatch(taskHandlers.deleteTaskTodaySuccess(task));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.deleteTaskTomorrowSuccess(task));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.deleteTaskNextSuccess(task));
          break;
        case taskTypes.AFTER:
          dispatch(taskHandlers.deleteTaskAfterSuccess(task));
          break;
        default:
          dispatch(taskHandlers.deleteTaskBurnedSuccess(task));
      }
    })
    .catch(error => {
      switch (dispatcher) {
        case taskTypes.TODAY:
          dispatch(taskHandlers.deleteTaskTodayError(error));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.deleteTaskTomorrowError(error));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.deleteTaskNextError(error));
          break;
        case taskTypes.AFTER:
          dispatch(taskHandlers.deleteTaskAfterError(error));
          break;
        default:
          dispatch(taskHandlers.deleteTaskBurnedError(error));
      }
    });
};

export const removeTask = task => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;

  const dispatcher = defineDispatcher(task);

  switch (dispatcher) {
    case taskTypes.TODAY:
      try {
        dispatch(taskHandlers.removeTaskTodayRequest());
        dispatch(taskHandlers.removeTaskTodaySuccess(task));
      } catch (error) {
        dispatch(taskHandlers.removeTaskTodayError(error));
      }
      break;
    case taskTypes.TOMORROW:
      try {
        dispatch(taskHandlers.removeTaskTomorrowRequest());
        dispatch(taskHandlers.removeTaskTomorrowSuccess(task));
      } catch (error) {
        dispatch(taskHandlers.removeTaskTomorrowError(error));
      }
      break;
    case taskTypes.NEXT:
      try {
        dispatch(taskHandlers.removeTaskNextRequest());
        dispatch(taskHandlers.removeTaskNextSuccess(task));
      } catch (error) {
        dispatch(taskHandlers.removeTaskNextError(error));
      }
      break;

    case taskTypes.AFTER:
      try {
        dispatch(taskHandlers.removeTaskAfterRequest());
        dispatch(taskHandlers.removeTaskAfterSuccess(task));
      } catch (error) {
        dispatch(taskHandlers.removeTaskAfterError(error));
      }
      break;
    default:
      try {
        dispatch(taskHandlers.removeTaskBurnedRequest());
        dispatch(taskHandlers.removeTaskBurnedSuccess(task));
      } catch (error) {
        dispatch(taskHandlers.removeTaskBurnedError(error));
      }
  }
};
