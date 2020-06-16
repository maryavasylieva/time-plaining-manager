export const getAllTasks = state => state.tasks;

export const getTodayTomorrowTasks = state => state.tasks.todayTomorrow;
export const getNextAfterTasks = state => state.tasks.nextAfter;
export const getBurnedOutTasks = state => state.tasks.burnedOut;
export const getDoneTasks = state => state.tasks.done;

export const getTaskInEditMode = state => state.tasks.taskInEditMode;
