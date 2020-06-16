import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import throttle from 'redux-throttle';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import ReduxThunk from 'redux-thunk';
import tasks from './tasks/tasksReducer';
import session from './session/sessionReducer';
import global from './global/globalReducer';
import componentController from './componentController/componentReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const defaultWait = 1000;
const defaultThrottleOption = {
  // https://lodash.com/docs#throttle
  leading: true,
  trailing: true,
};

const rootReducer = combineReducers({
  session: persistReducer(persistConfig, session),
  tasks,
  global,
  componentController,
});

const middleware = [throttle(defaultWait, defaultThrottleOption), ReduxThunk];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
