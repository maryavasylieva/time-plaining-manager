export const ActionTypes = {
  // EDIT MODE

  PUT_TASK_TO_EDIT_MODE: 'PUT_TASK_TO_EDIT_MODE',
  REMOVE_TASK_FROM_EDIT_MODE: 'REMOVE_TASK_FROM_EDIT_MODE',

  // GET

  GET_TASKS_REQUEST: 'GET_TASKS_REQUEST',
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
  GET_TASKS_ERROR: 'GET_TASKS_ERROR',

  // POST

  POST_TODAY_TASK_REQUEST: 'POST_TODAY_TASK_REQUEST',
  POST_TODAY_TASK_SUCCESS: 'POST_TODAY_TASK_SUCCESS',
  POST_TODAY_TASK_ERROR: 'POST_TODAY_TASK_ERROR',

  POST_TOMORROW_TASK_REQUEST: 'POST_TOMORROW_TASK_REQUEST',
  POST_TOMORROW_TASK_SUCCESS: 'POST_TOMORROW_TASK_SUCCESS',
  POST_TOMORROW_TASK_ERROR: 'POST_TOMORROW_TASK_ERROR',

  POST_NEXT_TASK_REQUEST: 'POST_NEXT_TASK_REQUEST',
  POST_NEXT_TASK_SUCCESS: 'POST_NEXT_TASK_SUCCESS',
  POST_NEXT_TASK_ERROR: 'POST_NEXT_TASK_ERROR',

  POST_AFTER_TASK_REQUEST: 'POST_AFTER_TASK_REQUEST',
  POST_AFTER_TASK_SUCCESS: 'POST_AFTER_TASK_SUCCESS',
  POST_AFTER_TASK_ERROR: 'POST_AFTER_TASK_ERROR',

  POST_BURNED_TASK_REQUEST: 'POST_BURNED_TASK_REQUEST',
  POST_BURNED_TASK_SUCCESS: 'POST_BURNED_TASK_SUCCESS',
  POST_BURNED_TASK_ERROR: 'POST_BURNED_TASK_ERROR',

  // UPDATE

  UPDATE_TODAY_TASK_REQUEST: 'UPDATE_TODAY_TASK_REQUEST',
  UPDATE_TODAY_TASK_SUCCESS: 'UPDATE_TODAY_TASK_SUCCESS',
  UPDATE_TODAY_TASK_ERROR: 'UPDATE_TODAY_TASK_ERROR',

  UPDATE_TOMORROW_TASK_REQUEST: 'UPDATE_TOMORROW_TASK_REQUEST',
  UPDATE_TOMORROW_TASK_SUCCESS: 'UPDATE_TOMORROW_TASK_SUCCESS',
  UPDATE_TOMORROW_TASK_ERROR: 'UPDATE_TOMORROW_TASK_ERROR',

  UPDATE_NEXT_TASK_REQUEST: 'UPDATE_NEXT_TASK_REQUEST',
  UPDATE_NEXT_TASK_SUCCESS: 'UPDATE_NEXT_TASK_SUCCESS',
  UPDATE_NEXT_TASK_ERROR: 'UPDATE_NEXT_TASK_ERROR',

  UPDATE_AFTER_TASK_REQUEST: 'UPDATE_AFTER_TASK_REQUEST',
  UPDATE_AFTER_TASK_SUCCESS: 'UPDATE_AFTER_TASK_SUCCESS',
  UPDATE_AFTER_TASK_ERROR: 'UPDATE_AFTER_TASK_ERROR',

  UPDATE_DONE_TASK_REQUEST: 'UPDATE_DONE_TASK_REQUEST',
  UPDATE_DONE_TASK_SUCCESS: 'UPDATE_DONE_TASK_SUCCESS',
  UPDATE_DONE_TASK_ERROR: 'UPDATE_DONE_TASK_ERROR',

  // DELETE

  DELETE_TODAY_TASK_REQUEST: 'DELETE_TODAY_TASK_REQUEST',
  DELETE_TODAY_TASK_SUCCESS: 'DELETE_TODAY_TASK_SUCCESS',
  DELETE_TODAY_TASK_ERROR: 'DELETE_TODAY_TASK_ERROR',

  DELETE_TOMORROW_TASK_REQUEST: 'DELETE_TOMORROW_TASK_REQUEST',
  DELETE_TOMORROW_TASK_SUCCESS: 'DELETE_TOMORROW_TASK_SUCCESS',
  DELETE_TOMORROW_TASK_ERROR: 'DELETE_TOMORROW_TASK_ERROR',

  DELETE_NEXT_TASK_REQUEST: 'DELETE_NEXT_TASK_REQUEST',
  DELETE_NEXT_TASK_SUCCESS: 'DELETE_NEXT_TASK_SUCCESS',
  DELETE_NEXT_TASK_ERROR: 'DELETE_NEXT_TASK_ERROR',

  DELETE_AFTER_TASK_REQUEST: 'DELETE_AFTER_TASK_REQUEST',
  DELETE_AFTER_TASK_SUCCESS: 'DELETE_AFTER_TASK_SUCCESS',
  DELETE_AFTER_TASK_ERROR: 'DELETE_AFTER_TASK_ERROR',

  DELETE_BURNED_TASK_REQUEST: 'DELETE_BURNED_TASK_REQUEST',
  DELETE_BURNED_TASK_SUCCESS: 'DELETE_BURNED_TASK_SUCCESS',
  DELETE_BURNED_TASK_ERROR: 'DELETE_BURNED_TASK_ERROR',

  // REMOVE A TASK FROM STORE

  REMOVE_TODAY_TASK_REQUEST: 'REMOVE_TODAY_TASK_REQUEST',
  REMOVE_TODAY_TASK_SUCCESS: 'REMOVE_TODAY_TASK_SUCCESS',
  REMOVE_TODAY_TASK_ERROR: 'REMOVE_TODAY_TASK_ERROR',

  REMOVE_TOMORROW_TASK_REQUEST: 'REMOVE_TOMORROW_TASK_REQUEST',
  REMOVE_TOMORROW_TASK_SUCCESS: 'REMOVE_TOMORROW_TASK_SUCCESS',
  REMOVE_TOMORROW_TASK_ERROR: 'REMOVE_TOMORROW_TASK_ERROR',

  REMOVE_NEXT_TASK_REQUEST: 'REMOVE_NEXT_TASK_REQUEST',
  REMOVE_NEXT_TASK_SUCCESS: 'REMOVE_NEXT_TASK_SUCCESS',
  REMOVE_NEXT_TASK_ERROR: 'REMOVE_NEXT_TASK_ERROR',

  REMOVE_AFTER_TASK_REQUEST: 'REMOVE_AFTER_TASK_REQUEST',
  REMOVE_AFTER_TASK_SUCCESS: 'REMOVE_AFTER_TASK_SUCCESS',
  REMOVE_AFTER_TASK_ERROR: 'REMOVE_AFTER_TASK_ERROR',

  REMOVE_BURNED_TASK_REQUEST: 'REMOVE_BURNED_TASK_REQUEST',
  REMOVE_BURNED_TASK_SUCCESS: 'REMOVE_BURNED_TASK_SUCCESS',
  REMOVE_BURNED_TASK_ERROR: 'REMOVE_BURNED_TASK_ERROR',
};

// EDIT MODE

export const putTaskToEditMode = task => ({
  type: ActionTypes.PUT_TASK_TO_EDIT_MODE,
  payload: task,
});

export const removeTaskFromEditMode = task => ({
  type: ActionTypes.REMOVE_TASK_FROM_EDIT_MODE,
  payload: task,
});

// GET TASKS

export const getTasksRequest = () => ({
  type: ActionTypes.GET_TASKS_REQUEST,
});

export const getTasksSuccess = tasks => ({
  type: ActionTypes.GET_TASKS_SUCCESS,
  payload: tasks,
});

export const getTasksErorr = err => ({
  type: ActionTypes.GET_TASKS_ERROR,
  payload: err,
});

// POST TODAY TASK

export const postTaskTodayRequest = () => ({
  type: ActionTypes.POST_TODAY_TASK_REQUEST,
});

export const postTaskTodaySuccess = task => ({
  type: ActionTypes.POST_TODAY_TASK_SUCCESS,
  payload: task,
});

export const postTaskTodayError = err => ({
  type: ActionTypes.POST_TODAY_TASK_ERROR,
  payload: err,
});

// POST TOMORROW TASK

export const postTaskTomorrowRequest = () => ({
  type: ActionTypes.POST_TOMORROW_TASK_REQUEST,
});

export const postTaskTomorrowSuccess = task => ({
  type: ActionTypes.POST_TOMORROW_TASK_SUCCESS,
  payload: task,
});

export const postTaskTomorrowError = err => ({
  type: ActionTypes.POST_TOMORROW_TASK_ERROR,
  payload: err,
});

// POST NEXT WEEK TASK

export const postTaskNextRequest = () => ({
  type: ActionTypes.POST_NEXT_TASK_REQUEST,
});

export const postTaskNextSuccess = task => ({
  type: ActionTypes.POST_NEXT_TASK_SUCCESS,
  payload: task,
});

export const postTaskNextError = err => ({
  type: ActionTypes.POST_NEXT_TASK_ERROR,
  payload: err,
});

// POST AFTER NEXT WEEK TASK

export const postTaskAfterRequest = () => ({
  type: ActionTypes.POST_AFTER_TASK_REQUEST,
});

export const postTaskAfterSuccess = task => ({
  type: ActionTypes.POST_AFTER_TASK_SUCCESS,
  payload: task,
});

export const postTaskAfterError = err => ({
  type: ActionTypes.POST_AFTER_TASK_ERROR,
  payload: err,
});

// UPDATE TODAY TASK

export const updateTaskTodayRequest = () => ({
  type: ActionTypes.UPDATE_TODAY_TASK_REQUEST,
});

export const updateTaskTodaySuccess = task => ({
  type: ActionTypes.UPDATE_TODAY_TASK_SUCCESS,
  payload: task,
});

export const updateTaskTodayError = err => ({
  type: ActionTypes.UPDATE_TODAY_TASK_ERROR,
  payload: err,
});

// UPDATE TOMORROW TASK

export const updateTaskTomorrowRequest = () => ({
  type: ActionTypes.UPDATE_TOMORROW_TASK_REQUEST,
});

export const updateTaskTomorrowSuccess = task => ({
  type: ActionTypes.UPDATE_TOMORROW_TASK_SUCCESS,
  payload: task,
});

export const updateTaskTomorrowError = err => ({
  type: ActionTypes.UPDATE_TOMORROW_TASK_ERROR,
  payload: err,
});

// UPDATE NEXT WEEK TASK

export const updateTaskNextRequest = () => ({
  type: ActionTypes.UPDATE_NEXT_TASK_REQUEST,
});

export const updateTaskNextSuccess = task => ({
  type: ActionTypes.UPDATE_NEXT_TASK_SUCCESS,
  payload: task,
});

export const updateTaskNextError = err => ({
  type: ActionTypes.UPDATE_NEXT_TASK_ERROR,
  payload: err,
});

// UPDATE AFTER NEXT WEEK TASK

export const updateTaskAfterRequest = () => ({
  type: ActionTypes.UPDATE_AFTER_TASK_REQUEST,
});

export const updateTaskAfterSuccess = task => ({
  type: ActionTypes.UPDATE_AFTER_TASK_SUCCESS,
  payload: task,
});

export const updateTaskAfterError = err => ({
  type: ActionTypes.UPDATE_AFTER_TASK_ERROR,
  payload: err,
});

// UPDATE DONE TASK

export const updateTaskDoneRequest = () => ({
  type: ActionTypes.UPDATE_DONE_TASK_REQUEST,
});

export const updateTaskDoneSuccess = task => ({
  type: ActionTypes.UPDATE_DONE_TASK_SUCCESS,
  payload: task,
});

export const updateTaskDoneError = err => ({
  type: ActionTypes.UPDATE_DONE_TASK_ERROR,
  payload: err,
});

// DELETE TODAY TASK

export const deleteTaskTodayRequest = () => ({
  type: ActionTypes.DELETE_TODAY_TASK_REQUEST,
});

export const deleteTaskTodaySuccess = task => ({
  type: ActionTypes.DELETE_TODAY_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskTodayError = err => ({
  type: ActionTypes.DELETE_TODAY_TASK_ERROR,
  payload: err,
});

// DELETE TOMORROW TASK

export const deleteTaskTomorrowRequest = () => ({
  type: ActionTypes.DELETE_TOMORROW_TASK_REQUEST,
});

export const deleteTaskTomorrowSuccess = task => ({
  type: ActionTypes.DELETE_TOMORROW_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskTomorrowError = err => ({
  type: ActionTypes.DELETE_TOMORROW_TASK_ERROR,
  payload: err,
});

// DELETE NEXT WEEK TASK

export const deleteTaskNextRequest = () => ({
  type: ActionTypes.DELETE_NEXT_TASK_REQUEST,
});

export const deleteTaskNextSuccess = task => ({
  type: ActionTypes.DELETE_NEXT_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskNextError = err => ({
  type: ActionTypes.DELETE_NEXT_TASK_ERROR,
  payload: err,
});

// DELETE AFTER NEXT WEEK TASK

export const deleteTaskAfterRequest = () => ({
  type: ActionTypes.DELETE_AFTER_TASK_REQUEST,
});

export const deleteTaskAfterSuccess = task => ({
  type: ActionTypes.DELETE_AFTER_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskAfterError = err => ({
  type: ActionTypes.DELETE_AFTER_TASK_ERROR,
  payload: err,
});

// DELETE BURNED OUT TASK

export const deleteTaskBurnedRequest = () => ({
  type: ActionTypes.DELETE_BURNED_TASK_REQUEST,
});

export const deleteTaskBurnedSuccess = task => ({
  type: ActionTypes.DELETE_BURNED_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskBurnedError = err => ({
  type: ActionTypes.DELETE_BURNED_TASK_ERROR,
  payload: err,
});

// REMOVE TODAY TASK

export const removeTaskTodayRequest = () => ({
  type: ActionTypes.REMOVE_TODAY_TASK_REQUEST,
});

export const removeTaskTodaySuccess = task => ({
  type: ActionTypes.REMOVE_TODAY_TASK_SUCCESS,
  payload: task,
});

export const removeTaskTodayError = err => ({
  type: ActionTypes.REMOVE_TODAY_TASK_ERROR,
  payload: err,
});

// REMOVE TOMORROW TASK

export const removeTaskTomorrowRequest = () => ({
  type: ActionTypes.REMOVE_TOMORROW_TASK_REQUEST,
});

export const removeTaskTomorrowSuccess = task => ({
  type: ActionTypes.REMOVE_TOMORROW_TASK_SUCCESS,
  payload: task,
});

export const removeTaskTomorrowError = err => ({
  type: ActionTypes.REMOVE_TOMORROW_TASK_ERROR,
  payload: err,
});

// REMOVE NEXT WEEK TASK

export const removeTaskNextRequest = () => ({
  type: ActionTypes.REMOVE_NEXT_TASK_REQUEST,
});

export const removeTaskNextSuccess = task => ({
  type: ActionTypes.REMOVE_NEXT_TASK_SUCCESS,
  payload: task,
});

export const removeTaskNextError = err => ({
  type: ActionTypes.DELETE_NEXT_TASK_ERROR,
  payload: err,
});

// REMOVE AFTER NEXT WEEK TASK

export const removeTaskAfterRequest = () => ({
  type: ActionTypes.REMOVE_AFTER_TASK_REQUEST,
});

export const removeTaskAfterSuccess = task => ({
  type: ActionTypes.REMOVE_AFTER_TASK_SUCCESS,
  payload: task,
});

export const removeTaskAfterError = err => ({
  type: ActionTypes.REMOVE_AFTER_TASK_ERROR,
  payload: err,
});

// REMOVE BURNED OUT TASK

export const removeTaskBurnedRequest = () => ({
  type: ActionTypes.REMOVE_BURNED_TASK_REQUEST,
});

export const removeTaskBurnedSuccess = task => ({
  type: ActionTypes.REMOVE_BURNED_TASK_SUCCESS,
  payload: task,
});

export const removeTaskBurnedError = err => ({
  type: ActionTypes.REMOVE_BURNED_TASK_ERROR,
  payload: err,
});
