import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { Heading } from '../ui/Heading';
import Filter from '../ui/Filter';
import AccountBalance from '../features/accounts/AccountBalance';
import Debit from '../features/accounts/Debit';
import Credit from '../features/accounts/Credit';
import Loan from '../features/accounts/Loan';

const StyledAccounts = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 20rem;
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

function Accounts() {
  const [searchParams] = useSearchParams();

  const curSelected = searchParams.get('select') ?? 'debit';

  return (
    <StyledAccounts>
      <Heading>Manage Account</Heading>
      <Filter
        options={[
          { field: 'Debit', value: 'debit' },
          { field: 'Credit', value: 'credit' },
          { field: 'Loan', value: 'loan' },
        ]}
      />

      <AccountContainer>
        <AccountBalance />

        {curSelected === 'debit' && <Debit />}
        {curSelected === 'credit' && <Credit />}
        {curSelected === 'loan' && <Loan />}
      </AccountContainer>
    </StyledAccounts>
  );
}

export default Accounts;
