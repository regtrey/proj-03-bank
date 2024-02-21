import getCurrentTime from '../utils/getCurrentTime';

export const fakeTransactions = [
  // Added dateValue which is in milliseconds for sorting
  // Since this will be the initial value to be able to display the chart
  // the date value was modified to enable date sorting and avoid same initial dates for the data
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime() - 100000000,
    type: 'positive',
    message: 'loan',
    amount: 6000,
    deposit: 0,
    withdraw: 0,
    loan: 6000,
    payments: 0,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime() - 100000,
    type: 'positive',
    message: 'deposit',
    amount: 15000,
    deposit: 15000,
    withdraw: 0,
    loan: 0,
    payments: 0,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'negative',
    message: 'withdraw',
    amount: 5000,
    deposit: 0,
    withdraw: 5000,
    loan: 0,
    payments: 0,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'negative',
    message: 'loan payment',
    amount: 6000,
    deposit: 0,
    withdraw: 0,
    loan: 0,
    payments: 6000,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'negative',
    message: 'withdraw',
    amount: 10000,
    deposit: 0,
    withdraw: 10000,
    loan: 0,
    payments: 0,
  },
];
