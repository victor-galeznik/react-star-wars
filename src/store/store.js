import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';
import { setLocalStorage } from '../utils/localStorage';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  // store.getState().favoriteReducer;

  setLocalStorage('store', store.getState().favoriteReducer);
});

export default store;
