import styled from 'styled-components';

import { Heading } from '../../ui/Heading';
import { Form, Input, Label } from '../../ui/Form';
import { Button } from '../../ui/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withdraw } from './accountsSlice';

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
`;

const Title = styled(Heading)`
  font-size: 2.5rem;
`;

const ErrorSpan = styled.span`
  font-size: 1.2rem;
  color: red;
`;

function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const dispatch = useDispatch();
  const balance = useSelector((state) => state.accounts.balance);

  function handleSubmit(e) {
    e.preventDefault();

    if (withdrawAmount > balance) return;

    dispatch(withdraw(withdrawAmount));
    setWithdrawAmount('');
  }

  return (
    <StyledWithdraw>
      <Title as="h2">Withdraw</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Amount</Label>
        <Input
          type="number"
          min="0"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(Number(e.target.value))}
        >
          <ErrorSpan>Insufficient balance</ErrorSpan>
        </Input>
        <Button $size="small">Withdraw</Button>
      </Form>
    </StyledWithdraw>
  );
}

export default Withdraw;
