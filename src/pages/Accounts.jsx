import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { Heading } from '../ui/Heading';
import Filter from '../ui/Filter';
import AccountBalance from '../features/accounts/AccountBalance';
import Debit from '../features/accounts/debit/Debit';
import Credit from '../features/accounts/credit/Credit';
import Loan from '../features/accounts/loan/Loan';

const StyledAccounts = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 20rem;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;

  @media screen and (min-width: 1800px) {
    width: 75vw;
    margin: 0 auto;
  }

  @media screen and (max-width: 767px) {
    height: max-content;
    grid-template-columns: 1fr 20rem;
    align-items: center;
    padding: 2rem;
    padding-bottom: 12rem;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr 16rem;
  }
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
        $type="accounts"
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
