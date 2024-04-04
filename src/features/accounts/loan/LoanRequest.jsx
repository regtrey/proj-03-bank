import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loan } from '../accountsSlice';

import { Heading } from '../../../ui/Heading';
import { Form, Input, Label } from '../../../ui/Form';
import { Button } from '../../../ui/Button';

const StyledLoanRequest = styled.div`
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
    width: 49%;
  }

  @media screen and (max-width: 767px) {
    height: max-content;
    width: 100%;
    padding-bottom: 4rem;

    & input {
      margin-bottom: 2rem;
    }
  }
`;

const Title = styled(Heading)`
  font-size: 2.5rem;
`;

function LoanRequest() {
  const [loanAmount, setLoanAmount] = useState(0);

  const dispatch = useDispatch();
  const loanBalance = useSelector((state) => state.accounts.bills.loans);

  function handleSubmit(e) {
    e.preventDefault();

    if (!loanAmount || loanBalance) return;

    dispatch(loan(loanAmount));
    setLoanAmount(0);
  }

  return (
    <StyledLoanRequest>
      <Title as="h2">Request Loan</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="loan">Amount</Label>
        <Input
          id="loan"
          type="tel"
          min="0"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          disabled={loanBalance}
        />
        <Button $size="small" disabled={loanBalance}>
          Loan
        </Button>
      </Form>
    </StyledLoanRequest>
  );
}

export default LoanRequest;
