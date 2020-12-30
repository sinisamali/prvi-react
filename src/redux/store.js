// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './app-reducer';

// kreiramo Redux store
// export const store = createStore(rootReducer); // najprostiji store bez debuggera
// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // NOVO store koji omgucava koriscenje browser ekstenzije Redux DevTools Extension
// If you setup your store with middleware and enhancers, change:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(
  applyMiddleware(thunk)
)); // NOVO store koji podrzava i thunk i redux-dev-tools i React Native Debugger

export default store;