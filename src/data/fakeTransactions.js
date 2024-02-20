import getCurrentTime from '../utils/getCurrentTime';

export const fakeTransactions = [
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'positive',
    message: 'deposit',
    amount: 14200,
    deposit: 14200,
    withdraw: 0,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'negative',
    message: 'withdraw',
    amount: 3800,
    deposit: 0,
    withdraw: 3800,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'positive',
    message: 'deposit',
    amount: 8200,
    deposit: 8200,
    withdraw: 0,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'negative',
    message: 'withdraw',
    amount: 10000,
    deposit: 0,
    withdraw: 10000,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'negative',
    message: 'withdraw',
    amount: 10000,
    deposit: 0,
    withdraw: 10000,
  },
  {
    date: getCurrentTime(),
    dateValue: new Date().getTime(),
    type: 'negative',
    message: 'withdraw',
    amount: 2400,
    deposit: 0,
    withdraw: 2400,
  },
];