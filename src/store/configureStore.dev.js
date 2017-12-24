import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import DevTools from '../DevTools/DevTools';

const enhancer = compose(applyMiddleware(thunk), DevTools.instrument());

const initialState = {};

export default function configureStore() {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer')));
  }

  return store;
}
