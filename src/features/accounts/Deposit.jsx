import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Heading } from '../../ui/Heading';
import { Form, Input, Label, Select } from '../../ui/Form';
import { Button } from '../../ui/Button';
import { useState } from 'react';
import { deposit } from './accountsSlice';

const StyledDeposit = styled.div`
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

function Deposit() {
  const [depositAmount, setDepositAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(deposit(depositAmount));
    setDepositAmount('');
  }

  return (
    <StyledDeposit>
      <Title as="h2">Deposit</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Amount</Label>
        <Input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(Number(e.target.value))}
        />

        <Label>Select currency</Label>
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
        <Button $size="small">Deposit</Button>
      </Form>
    </StyledDeposit>
  );
}

export default Deposit;
