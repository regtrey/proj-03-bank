import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payLoan } from './accountsSlice';

import { Heading } from '../../ui/Heading';
import { Form, Input, Label, Select } from '../../ui/Form';
import { Button } from '../../ui/Button';

const StyledLoanPayment = styled.div`
  height: 35rem;
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

function LoanPayment() {
  const [paymentType, setPaymentType] = useState('full');
  const [paymentAmount, setPaymentAmount] = useState(0);

  const dispatch = useDispatch();
  const balance = useSelector((state) => state.accounts.balance);
  const loans = useSelector((state) => state.accounts.bills.loans);

  const isEnough = balance >= paymentAmount;

  useEffect(
    function () {
      if (paymentType === 'full') setPaymentAmount(loans);
      if (paymentType === 'partial') setPaymentAmount(paymentAmount);
    },
    [paymentType, loans]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!paymentAmount || paymentAmount > balance) return;

    dispatch(payLoan(paymentAmount));
    setPaymentType('full');
    setPaymentAmount(loans);
  }

  return (
    <StyledLoanPayment>
      <Title as="h2">Loan Payment</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Amount</Label>
        <Input
          type="tel"
          min="0"
          $isEnough={!isEnough ? 'insufficient' : ''}
          value={paymentType === 'full' ? loans : paymentAmount}
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
          Pay loan
        </Button>
      </Form>
    </StyledLoanPayment>
  );
}

export default LoanPayment;
