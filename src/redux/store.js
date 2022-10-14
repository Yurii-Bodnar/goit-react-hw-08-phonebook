import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReduser } from './ContactsRedux/contanctsSlice';
import { filterReduser } from './FilterRedux/filterSlice';
import { authReducer } from './Auth/slice';



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  
};

const persistAuthReduser = persistReducer(authPersistConfig,authReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
    auth: persistAuthReduser,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
