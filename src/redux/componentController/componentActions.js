export const ActionTypes = {
  MODAL_DELETE_TASK_OPEN: 'MODAL_DELETE_TASK_OPEN',
  MODAL_DELETE_TASK_CLOSE: 'MODAL_DELETE_TASK_CLOSE',
  HANDLE_OPEN_STATISTICS: 'HANDLE_OPEN_STATISTICS',
  HANDLE_OPEN_DASHBOARD: 'HANDLE_OPEN_DASHBOARD',
  HANDLE_OPEN_TABS_LIST: 'HANDLE_OPEN_TABS_LIST',
  HANDLE_OPEN_MODAL_LOGOUT: 'HANDLE_OPEN_MODAL_LOGOUT',
  HANDLE_CLOSE_MODAL_LOGOUT: 'HANDLE_CLOSE_MODAL_LOGOUT',
  HANDLE_OPEN_BURGER_MENU: 'HANDLE_OPEN_BURGER_MENU',
  HANDLE_OPEN_СREATE_TASK_BUTTON: 'HANDLE_OPEN_СREATE_TASK_BUTTON',

  HANDLE_BURGER_EVENT_BUTTON: 'HANDLE_BURGER_EVENT_BUTTON',

  HANDLE_OPEN_TASK_POPUP_CREATE: 'HANDLE_OPEN_TASK_POPUP_CREATE',
  HANDLE_OPEN_TASK_POPUP_EDIT: 'HANDLE_OPEN_TASK_POPUP_EDIT',
  HANDLE_CLOSE_TASK_POPUP_CREATE: 'HANDLE_CLOSE_TASK_POPUP_CREATE',
  HANDLE_CLOSE_TASK_POPUP_EDIT: 'HANDLE_CLOSE_TASK_POPUP_EDIT',
};

export const modalDeleteTaskOpen = () => ({
  type: ActionTypes.MODAL_DELETE_TASK_OPEN,
  payload: {},
});
export const modalDeleteTaskClose = () => ({
  type: ActionTypes.MODAL_DELETE_TASK_CLOSE,
  payload: {},
});

export const handleOpenStatistics = () => ({
  type: ActionTypes.HANDLE_OPEN_STATISTICS,
  payload: {},
});

export const handleOpenDashboard = () => ({
  type: ActionTypes.HANDLE_OPEN_DASHBOARD,
  payload: {},
});

export const modalLogoutOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_MODAL_LOGOUT,
  payload: {},
});
export const modalLogoutClose = () => ({
  type: ActionTypes.HANDLE_CLOSE_MODAL_LOGOUT,
  payload: {},
});

export const taskPopUpCreateOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_TASK_POPUP_CREATE,
  payload: {},
});

export const taskPopUpEditOpen = isEditOpen => ({
  type: ActionTypes.HANDLE_OPEN_TASK_POPUP_EDIT,
  payload: isEditOpen,
});

export const taskPopUpCreateClose = () => ({
  type: ActionTypes.HANDLE_CLOSE_TASK_POPUP_CREATE,
  payload: {},
});

export const taskPopUpEditClose = () => ({
  type: ActionTypes.HANDLE_CLOSE_TASK_POPUP_EDIT,
  payload: {},
});

export const burgerMenuOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_BURGER_MENU,
  payload: {},
});

export const burgerEvent = value => ({
  type: ActionTypes.HANDLE_BURGER_EVENT_BUTTON,
  payload: value,
});

export const createTaskButtonOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_СREATE_TASK_BUTTON,
  payload: {},
});

export const tabsListOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_TABS_LIST,
  payload: {},
});
