import styled from 'styled-components';
import { usePayment } from '../../contexts/PaymentContext';

import { Heading } from '../../ui/Heading';
import { Form, Input, Label, Select } from '../../ui/Form';
import { Button } from '../../ui/Button';

const StyledCreditPayment = styled.div`
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

function CreditPayment() {
  const {
    paymentType,
    setPaymentType,
    paymentAmount,
    setPaymentAmount,
    handleSubmit,
    isEnough,
    balance,
    creditCardBill,
  } = usePayment();

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
