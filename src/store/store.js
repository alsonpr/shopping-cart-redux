import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, counterReducer);
  

const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

export default store;
export const persistor = persistStore(store);
