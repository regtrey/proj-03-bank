import styled from 'styled-components';
import { usePay } from '../../../hooks/usePay';

import { Heading } from '../../../ui/Heading';
import { Form, Input, Label, Select } from '../../../ui/Form';
import { Button } from '../../../ui/Button';

const StyledLoanPayment = styled.div`
  height: 35rem;
  width: 50%;
  background-color: var(--color-gray-50);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 850px) {
    width: 49%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
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

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    top: 8rem;
    right: 0.5rem;
  }
`;

function LoanPayment() {
  const {
    paymentType,
    setPaymentType,
    paymentAmount,
    setPaymentAmount,
    handleSubmit,
    isEnough,
    balance,
    loans,
  } = usePay();

  return (
    <StyledLoanPayment>
      <Title as="h2">Loan Payment</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="loan-payment">Amount</Label>
        <Input
          id="loan-payment"
          type="tel"
          min="0"
          $isEnough={!isEnough ? 'insufficient' : ''}
          value={paymentType === 'full' ? loans : paymentAmount}
          onChange={(e) => setPaymentAmount(Number(e.target.value))}
          disabled={paymentType === 'full'}
        />
        <ErrorSpan $isEnough={isEnough}>Insufficient balance</ErrorSpan>

        <Label htmlFor="select-loan-payment-type">Select payment type</Label>
        <Select
          id="select-loan-payment-type"
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
