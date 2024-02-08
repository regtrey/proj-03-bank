import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { Heading } from '../ui/Heading';
import Filter from '../ui/Filter';
import { Button } from '../ui/Button';
import BalanceCard from '../features/dashboard/BalanceCard';
import AccountBalance from '../features/accounts/AccountBalance';

const StyledAccounts = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 23rem;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
`;

const AccountContainer = styled.div`
  height: max-content;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  grid-column: 1 / -1;
  grid-row: 2 / -1;
`;

const StyledSavings = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Deposit = styled.div`
  height: 35rem;
  width: 50%;
  background-color: var(--color-gray-50);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Withdraw = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Input = styled.input`
  height: 4rem;
`;

const Select = styled.select`
  height: 4rem;
  margin-bottom: 1.5rem;
`;

function Accounts() {
  const [searchParams] = useSearchParams();

  const curSelected = searchParams.get('select') ?? 'savings';

  return (
    <StyledAccounts>
      <Heading>Manage Account</Heading>
      <Filter
        options={[
          { field: 'Savings', value: 'savings' },
          { field: 'Credit', value: 'credit' },
          { field: 'Loan', value: 'loan' },
        ]}
      />

      <AccountContainer>
        <AccountBalance />
        <StyledSavings>
          <Deposit>
            <Title as="h2">Deposit</Title>
            <Form>
              <Label>Amount</Label>
              <Input />

              <Label>Select currency</Label>
              <Select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </Select>
              <Button $size="small">Deposit</Button>
            </Form>
          </Deposit>

          <Withdraw>
            <Title as="h2">Withdraw</Title>
            <Form>
              <Label>Amount</Label>
              <Input />
              <Button $size="small">Withdraw</Button>
            </Form>
          </Withdraw>
        </StyledSavings>
      </AccountContainer>
    </StyledAccounts>
  );
}

export default Accounts;
