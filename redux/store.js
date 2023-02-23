import {configureStore} from '@reduxjs/toolkit';
import expenseReducer from './expenses';

export const store = configureStore({
  reducer: {
    expenseTracker: expenseReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
