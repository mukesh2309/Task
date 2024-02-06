import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './slices/reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;