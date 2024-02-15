import { createSlice } from '@reduxjs/toolkit';
import getCurrentTime from '../../utils/getCurrentTime';

const initialState = {
  balance: 0,
  creditBalance: 8000,
  bills: {
    creditCardBill: 2000,
    loans: 0,
  },
  transactions: [],
  isLoading: false,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        type: 'positive',
        message: 'Deposit',
        amount: action.payload,
      });
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        type: 'negative',
        message: 'Withdraw',
        amount: action.payload,
      });
    },
    loan(state, action) {
      state.bills.loans += action.payload;
      state.balance += action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        type: 'positive',
        message: 'Loan',
        amount: action.payload,
      });
    },
    payLoan(state, action) {
      state.balance -= action.payload;
      state.bills.loans -= action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        type: 'negative',
        message: 'Loan payment',
        amount: action.payload,
      });
    },
    payCreditCard(state, action) {
      state.balance -= action.payload;
      state.creditBalance += action.payload;
      state.bills.creditCardBill -= action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        type: 'negative',
        message: 'Credit card bill payment',
        amount: action.payload,
      });
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, loan, payLoan, payCreditCard } = accountsSlice.actions;

export function deposit(amount, currency) {
  if (currency === 'USD') {
    return { type: 'accounts/deposit', payload: amount };
  }

  // Making an API call with redux-thunk
  // If we return a function, redux will know that this is the asynchronous action we want to execute before dispatching to the store
  return async function (dispatch, getState) {
    // Loading
    dispatch({ type: 'accounts/convertingCurrency' });

    // Currency converter API:
    // https://api.frankfurter.app/latest?amount=0&from=EUR&to=USD
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: 'accounts/deposit', payload: converted });
  };
}

export default accountsSlice.reducer;
