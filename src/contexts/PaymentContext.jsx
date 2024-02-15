import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { payLoan, payCreditCard } from '../features/accounts/accountsSlice';

const PaymentContext = createContext();

function PaymentProvider({ children }) {
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

  return (
    <PaymentContext.Provider
      value={{
        paymentType,
        setPaymentType,
        paymentAmount,
        setPaymentAmount,
        handleSubmit,
        isEnough,
        balance,
        creditCardBill,
        loans,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

function usePayment() {
  const context = useContext(PaymentContext);
  if (context === 'undefined')
    throw new Error('Payment context was used outside of the provider');
  return context;
}

export { PaymentProvider, usePayment };
