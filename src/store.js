import { configureStore } from '@reduxjs/toolkit';
import accountsSlice from './features/accounts/accountsSlice';
import userSlice from './features/accounts/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    accounts: accountsSlice,
  },
});

export default store;
