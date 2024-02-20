import { createSlice } from '@reduxjs/toolkit';
import getCurrentTime from '../../utils/getCurrentTime';
import { fakeTransactions } from '../../data/fakeTransactions';

const initialState = {
  balance: 0,
  creditBalance: 8000,
  bills: {
    creditCardBill: 2000,
    loans: 0,
  },
  transactions: fakeTransactions,
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
        dateValue: new Date().getTime(),
        type: 'positive',
        message: 'deposit',
        amount: action.payload,
        deposit: action.payload,
        withdraw: 0,
      });
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        dateValue: new Date().getTime(),
        type: 'negative',
        message: 'withdraw',
        amount: action.payload,
        withdraw: action.payload,
        deposit: 0,
      });
    },
    loan(state, action) {
      state.bills.loans += action.payload;
      state.balance += action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        dateValue: new Date().getTime(),
        type: 'positive',
        message: 'loan',
        amount: action.payload,
        loan: action.payload,
      });
    },
    payLoan(state, action) {
      state.balance -= action.payload;
      state.bills.loans -= action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        dateValue: new Date().getTime(),
        type: 'negative',
        message: 'loan payment',
        amount: action.payload,
        loan: action.payload,
      });
    },
    payCreditCard(state, action) {
      state.balance -= action.payload;
      state.creditBalance += action.payload;
      state.bills.creditCardBill -= action.payload;
      state.transactions.push({
        date: getCurrentTime(),
        dateValue: new Date().getTime(),
        type: 'negative',
        message: 'credit card bill payment',
        amount: action.payload,
        credit: action.payload,
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
