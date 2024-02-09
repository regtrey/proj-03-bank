import styled from 'styled-components';

import { Heading } from '../../ui/Heading';
import { Form, Input, Label } from '../../ui/Form';
import { Button } from '../../ui/Button';
import { useState } from 'react';

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

function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  return (
    <StyledWithdraw>
      <Title as="h2">Withdraw</Title>
      <Form>
        <Label>Amount</Label>
        <Input
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <Button $size="small">Withdraw</Button>
      </Form>
    </StyledWithdraw>
  );
}

export default Withdraw;
