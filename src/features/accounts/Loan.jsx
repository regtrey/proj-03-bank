import styled from 'styled-components';

import LoanPayment from './LoanPayment';
import LoanBalance from './LoanBalance';

const StyledLoan = styled.div`
  height: max-content;
  display: flex;
  gap: 1.5rem;
`;

function Loan() {
  return (
    <StyledLoan>
      <LoanBalance />
      <LoanPayment />
      <LoanPayment />
    </StyledLoan>
  );
}

export default Loan;
