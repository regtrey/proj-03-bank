import styled from 'styled-components';

import Deposit from './Deposit';
import Withdraw from './Withdraw';

const StyledDebit = styled.div`
  display: flex;
  gap: 1.5rem;
`;

function Debit() {
  return (
    <StyledDebit>
      <Deposit />
      <Withdraw />
    </StyledDebit>
  );
}

export default Debit;
