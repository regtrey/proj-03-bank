import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { payLoan, payCreditCard } from '../features/accounts/accountsSlice';

export function usePay() {
  const [paymentType, setPaymentType] = useState('full');
  const [paymentAmount, setPaymentAmount] = useState(0);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.accounts.balance);
  const loans = useSelector((state) => state.accounts.bills.loans);
  const creditCardBill = useSelector(
    (state) => state.accounts.bills.creditCardBill
  );

  const isEnough = balance >= paymentAmount;
  const curSelected = searchParams.get('select');

  useEffect(
    function () {
      if (curSelected === 'credit') {
        if (paymentType === 'full') setPaymentAmount(creditCardBill);
        if (paymentType === 'partial') setPaymentAmount(paymentAmount);
      }
      if (curSelected === 'loan') {
        if (paymentType === 'full') setPaymentAmount(loans);
        if (paymentType === 'partial') setPaymentAmount(paymentAmount);
      }
    },
    [curSelected, paymentType, loans, creditCardBill]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!paymentAmount || paymentAmount > balance) return;

    if (curSelected === 'credit') {
      dispatch(payCreditCard(paymentAmount));
      setPaymentAmount(creditCardBill);
    }
    if (curSelected === 'loan') {
      dispatch(payLoan(paymentAmount));
      setPaymentAmount(loans);
    }
    setPaymentType('full');
  }

  return {
    paymentType,
    setPaymentType,
    paymentAmount,
    setPaymentAmount,
    handleSubmit,
    isEnough,
    balance,
    creditCardBill,
    loans,
  };
}
