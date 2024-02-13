import styled from 'styled-components';

import CreditBalance from './CreditBalance';
import CreditPayment from './CreditPayment';

const StyledCredit = styled.div`
  height: max-content;
  display: flex;
  gap: 1.5rem;
`;

function Credit() {
  return (
    <StyledCredit>
      <CreditBalance />
      <CreditPayment />
    </StyledCredit>
  );
}

export default Credit;
