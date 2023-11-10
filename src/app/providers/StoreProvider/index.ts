import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager } from './config/StateSchema';

// eslint-disable-next-line object-curly-newline
export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  AppDispatch,
  ReduxStoreWithManager,
};
