import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { Heading } from '../ui/Heading';
import Filter from '../ui/Filter';
import AccountBalance from '../features/accounts/AccountBalance';
import Deposit from '../features/accounts/Deposit';
import Withdraw from '../features/accounts/Withdraw';

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
          <Deposit />
          <Withdraw />
        </StyledSavings>
      </AccountContainer>
    </StyledAccounts>
  );
}

export default Accounts;
