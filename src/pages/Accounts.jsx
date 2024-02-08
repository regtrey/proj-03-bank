import styled from 'styled-components';

import { Heading } from '../ui/Heading';
import Filter from '../ui/Filter';
import { useSearchParams } from 'react-router-dom';

const StyledAccounts = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 23rem;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
`;

const StyledDeposit = styled.div`
  height: 54.5rem;
  background-color: aliceblue;
  border-radius: 15px;
  padding: 2rem;

  grid-column: 1 / -1;
  grid-row: 2 / -1;
`;

const Title = styled(Heading)`
  font-size: 2.5rem;
  text-transform: capitalize;
`;

function Accounts() {
  const [searchParams] = useSearchParams();

  const curSelected = searchParams.get('select') ?? 'deposit';

  return (
    <StyledAccounts>
      <Heading>Manage Account</Heading>
      <Filter
        options={[
          { field: 'Deposit', value: 'deposit' },
          { field: 'Withdraw', value: 'withdraw' },
          { field: 'Loan', value: 'loan' },
        ]}
      />

      <StyledDeposit>
        <Title as="h2">{curSelected}</Title>
      </StyledDeposit>
    </StyledAccounts>
  );
}

export default Accounts;
