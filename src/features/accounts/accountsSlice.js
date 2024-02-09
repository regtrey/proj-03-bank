import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loanBalance: 0,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    loan(state, action) {
      state.loanBalance += action.payload;
      state.balance += action.payload;
    },
  },
});

export const { deposit, withdraw, loan } = accountsSlice.actions;
export default accountsSlice.reducer;
