import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'app/middleware';
import { RootState, rootReducer } from 'app/reducers';
import { saveState } from '../utils/localStorage';
import thunk from 'redux-thunk';

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(logger, thunk);

  if (process.env.DEBUG) {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;

  store.subscribe(() => {
    // exclude parts of state that should not be persistent
    const { auth, validation, ...persistentState } = store.getState();

    saveState(persistentState);
  });

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
