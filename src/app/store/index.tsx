import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import rootReducer, { RootState } from './rootReducer';

const persistentReducer = persistReducer(
  {
    key: 'root',
    version: 1,
    storage
  },
  rootReducer
);

const store = configureStore({
  reducer: persistentReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

const persistentStore = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export { store, persistentStore };
