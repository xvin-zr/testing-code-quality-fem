import { configureStore } from '@reduxjs/toolkit';
import reducer from './items-slice';

export const store = createStore();

export function createStore() {
  return configureStore({
    reducer: { items: reducer },
  });
}

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
