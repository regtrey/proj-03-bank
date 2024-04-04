import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withdraw } from '../accountsSlice';

import { Heading } from '../../../ui/Heading';
import { Form, Input, Label } from '../../../ui/Form';
import { Button } from '../../../ui/Button';

const StyledWithdraw = styled.div`
  height: 35rem;
  width: 50%;
  background-color: var(--color-gray-50);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & input {
    margin-bottom: 10.5rem;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    height: max-content;
    padding-bottom: 4rem;

    & input {
      margin-bottom: 2rem;
    }
  }
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

function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const dispatch = useDispatch();
  const balance = useSelector((state) => state.accounts.balance);

  const isEnough = balance >= withdrawAmount;

  function handleSubmit(e) {
    e.preventDefault();

    if (withdrawAmount > balance || withdrawAmount === 0) return;

    dispatch(withdraw(withdrawAmount));
    setWithdrawAmount('');
  }

  return (
    <StyledWithdraw>
      <Title as="h2">Withdraw</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="withdraw">Amount</Label>
        <Input
          id="withdraw"
          type="tel"
          min="0"
          $isEnough={!isEnough ? 'insufficient' : ''}
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(Number(e.target.value))}
        />
        <ErrorSpan $isEnough={isEnough}>Insufficient balance</ErrorSpan>
        <Button $size="small" disabled={!isEnough}>
          Withdraw
        </Button>
      </Form>
    </StyledWithdraw>
  );
}

export default Withdraw;
