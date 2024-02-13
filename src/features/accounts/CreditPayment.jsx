import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payCreditCard } from './accountsSlice';

import { Heading } from '../../ui/Heading';
import { Form, Input, Label, Select } from '../../ui/Form';
import { Button } from '../../ui/Button';
import MiniSpinner from '../../ui/MiniSpinner';

const StyledCreditPayment = styled.div`
  width: 50%;
  background-color: var(--color-gray-50);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled(Heading)`
  font-size: 2.5rem;
`;

const ErrorSpan = styled.span`
  font-size: 1.2rem;
  color: red;
  position: absolute;
  top: 8.5rem;
  right: 1rem;

  display: ${(props) => (!props.$isEnough ? 'block' : 'none')};
`;

function CreditPayment() {
  const [paymentType, setPaymentType] = useState('full');
  const [paymentAmount, setPaymentAmount] = useState(0);

  const dispatch = useDispatch();
  const balance = useSelector((state) => state.accounts.balance);
  const creditCardBill = useSelector(
    (state) => state.accounts.bills.creditCardBill
  );

  const isEnough = balance >= paymentAmount;

  useEffect(
    function () {
      if (paymentType === 'full') setPaymentAmount(creditCardBill);
      if (paymentType === 'partial') setPaymentAmount(paymentAmount);
    },
    [paymentType, creditCardBill]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!paymentAmount || paymentAmount > balance) return;

    dispatch(payCreditCard(paymentAmount));
    setPaymentType('full');
    setPaymentAmount(creditCardBill);
  }

  return (
    <StyledCreditPayment>
      <Title as="h2">Credit Card Bill</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Amount</Label>
        <Input
          type="tel"
          min="0"
          $isEnough={!isEnough ? 'insufficient' : ''}
          value={paymentType === 'full' ? creditCardBill : paymentAmount}
          onChange={(e) => setPaymentAmount(Number(e.target.value))}
          disabled={paymentType === 'full'}
        />
        <ErrorSpan $isEnough={isEnough}>Insufficient balance</ErrorSpan>

        <Label>Select payment type</Label>
        <Select
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
        >
          <option value="full">Full payment</option>
          <option value="partial">Partial payment</option>
        </Select>

        <Button
          $size="small"
          disabled={!isEnough || balance === 0 || paymentAmount === 0}
        >
          Pay balance
        </Button>
      </Form>
    </StyledCreditPayment>
  );
}

export default CreditPayment;
